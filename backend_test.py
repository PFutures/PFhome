#!/usr/bin/env python3
"""
Backend API Testing Script for Polymathic Futures
Tests the magazines endpoint specifically focusing on Urban Tomorrow magazine cover update
"""

import asyncio
import aiohttp
import json
import os
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables from frontend to get the correct backend URL
frontend_env_path = Path(__file__).parent / 'frontend' / '.env'
load_dotenv(frontend_env_path)

# Get the backend URL from environment
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API_BASE_URL = f"{BACKEND_URL}/api"

# Expected data for verification
EXPECTED_URBAN_TOMORROW_URL = "https://customer-assets.emergentagent.com/job_future-vision-6/artifacts/v4ds5j7a_7cabefac-c0dc-4c06-8ba9-893b718bc34e.webp"
EXPECTED_MAGAZINE_COUNT = 3

class BackendTester:
    def __init__(self):
        self.session = None
        self.test_results = []
        
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
        
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    def log_test(self, test_name, passed, message, details=None):
        """Log test results"""
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{status} {test_name}: {message}")
        if details:
            print(f"   Details: {details}")
        
        self.test_results.append({
            'test': test_name,
            'passed': passed,
            'message': message,
            'details': details
        })
    
    async def test_backend_health(self):
        """Test if backend server is responding"""
        try:
            async with self.session.get(f"{API_BASE_URL}/") as response:
                if response.status == 200:
                    data = await response.json()
                    self.log_test(
                        "Backend Health Check",
                        True,
                        f"Backend is responding (Status: {response.status})",
                        data.get('message', 'No message')
                    )
                    return True
                else:
                    self.log_test(
                        "Backend Health Check",
                        False,
                        f"Backend returned status {response.status}"
                    )
                    return False
        except Exception as e:
            self.log_test(
                "Backend Health Check",
                False,
                f"Failed to connect to backend: {str(e)}"
            )
            return False
    
    async def test_magazines_endpoint(self):
        """Test the magazines endpoint"""
        try:
            async with self.session.get(f"{API_BASE_URL}/magazines") as response:
                if response.status == 200:
                    magazines = await response.json()
                    
                    # Test 1: Check if we get exactly 3 magazines
                    magazine_count = len(magazines)
                    if magazine_count == EXPECTED_MAGAZINE_COUNT:
                        self.log_test(
                            "Magazine Count",
                            True,
                            f"Returned {magazine_count} magazines as expected"
                        )
                    else:
                        self.log_test(
                            "Magazine Count",
                            False,
                            f"Expected {EXPECTED_MAGAZINE_COUNT} magazines, got {magazine_count}"
                        )
                    
                    return magazines
                else:
                    self.log_test(
                        "Magazines Endpoint",
                        False,
                        f"Magazines endpoint returned status {response.status}"
                    )
                    return None
        except Exception as e:
            self.log_test(
                "Magazines Endpoint",
                False,
                f"Failed to fetch magazines: {str(e)}"
            )
            return None
    
    async def test_urban_tomorrow_magazine(self, magazines):
        """Test Urban Tomorrow magazine specifically"""
        if not magazines:
            self.log_test(
                "Urban Tomorrow Magazine",
                False,
                "No magazines data to test"
            )
            return
        
        # Find Urban Tomorrow magazine
        urban_tomorrow = None
        for magazine in magazines:
            if "Urban Tomorrow" in magazine.get('title', ''):
                urban_tomorrow = magazine
                break
        
        if not urban_tomorrow:
            self.log_test(
                "Urban Tomorrow Magazine",
                False,
                "Urban Tomorrow magazine not found in response"
            )
            return
        
        # Test magazine title
        expected_title = "Urban Tomorrow - 2038 Edition"
        actual_title = urban_tomorrow.get('title', '')
        if actual_title == expected_title:
            self.log_test(
                "Urban Tomorrow Title",
                True,
                f"Title matches: '{actual_title}'"
            )
        else:
            self.log_test(
                "Urban Tomorrow Title",
                False,
                f"Expected '{expected_title}', got '{actual_title}'"
            )
        
        # Test cover image URL - THIS IS THE MAIN TEST
        actual_cover_url = urban_tomorrow.get('cover_image', '')
        if actual_cover_url == EXPECTED_URBAN_TOMORROW_URL:
            self.log_test(
                "Urban Tomorrow Cover Image URL",
                True,
                "Cover image URL has been successfully updated to the new customer-assets URL"
            )
        else:
            self.log_test(
                "Urban Tomorrow Cover Image URL",
                False,
                f"Cover image URL mismatch",
                f"Expected: {EXPECTED_URBAN_TOMORROW_URL}\nActual: {actual_cover_url}"
            )
        
        # Test other required fields
        required_fields = ['id', 'year', 'description', 'industries', 'preview']
        for field in required_fields:
            if field in urban_tomorrow and urban_tomorrow[field]:
                self.log_test(
                    f"Urban Tomorrow {field.title()}",
                    True,
                    f"{field.title()} field is present and not empty"
                )
            else:
                self.log_test(
                    f"Urban Tomorrow {field.title()}",
                    False,
                    f"{field.title()} field is missing or empty"
                )
        
        # Verify specific content
        expected_year = "2038"
        if urban_tomorrow.get('year') == expected_year:
            self.log_test(
                "Urban Tomorrow Year",
                True,
                f"Year is correct: {expected_year}"
            )
        else:
            self.log_test(
                "Urban Tomorrow Year",
                False,
                f"Expected year {expected_year}, got {urban_tomorrow.get('year')}"
            )
        
        # Check industries array
        industries = urban_tomorrow.get('industries', [])
        expected_industries = ["Materials Science", "Urban Planning", "Infrastructure"]
        if set(industries) == set(expected_industries):
            self.log_test(
                "Urban Tomorrow Industries",
                True,
                f"Industries are correct: {industries}"
            )
        else:
            self.log_test(
                "Urban Tomorrow Industries",
                False,
                f"Industries mismatch. Expected: {expected_industries}, Got: {industries}"
            )
    
    async def test_other_magazines_intact(self, magazines):
        """Test that other magazines are still intact"""
        if not magazines:
            return
        
        # Test TechFlow Quarterly
        techflow = None
        for magazine in magazines:
            if "TechFlow Quarterly" in magazine.get('title', ''):
                techflow = magazine
                break
        
        if techflow:
            self.log_test(
                "TechFlow Quarterly Intact",
                True,
                "TechFlow Quarterly magazine is present and intact"
            )
        else:
            self.log_test(
                "TechFlow Quarterly Intact",
                False,
                "TechFlow Quarterly magazine is missing"
            )
        
        # Test BioFutures Medical
        biofutures = None
        for magazine in magazines:
            if "BioFutures Medical" in magazine.get('title', ''):
                biofutures = magazine
                break
        
        if biofutures:
            self.log_test(
                "BioFutures Medical Intact",
                True,
                "BioFutures Medical magazine is present and intact"
            )
        else:
            self.log_test(
                "BioFutures Medical Intact",
                False,
                "BioFutures Medical magazine is missing"
            )
    
    async def run_all_tests(self):
        """Run all backend tests"""
        print(f"🧪 Starting Backend API Tests")
        print(f"📡 Testing against: {API_BASE_URL}")
        print(f"🎯 Focus: Urban Tomorrow magazine cover image update")
        print("=" * 60)
        
        # Test 1: Backend health check
        backend_healthy = await self.test_backend_health()
        if not backend_healthy:
            print("❌ Backend is not responding. Cannot continue with tests.")
            return False
        
        # Test 2: Magazines endpoint
        magazines = await self.test_magazines_endpoint()
        if magazines is None:
            print("❌ Cannot fetch magazines. Cannot continue with specific tests.")
            return False
        
        # Test 3: Urban Tomorrow magazine specific tests
        await self.test_urban_tomorrow_magazine(magazines)
        
        # Test 4: Other magazines integrity
        await self.test_other_magazines_intact(magazines)
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        
        passed_tests = [r for r in self.test_results if r['passed']]
        failed_tests = [r for r in self.test_results if not r['passed']]
        
        print(f"✅ Passed: {len(passed_tests)}")
        print(f"❌ Failed: {len(failed_tests)}")
        
        if failed_tests:
            print("\n🚨 FAILED TESTS:")
            for test in failed_tests:
                print(f"   • {test['test']}: {test['message']}")
                if test['details']:
                    print(f"     {test['details']}")
        
        # Check if the main objective is met
        urban_tomorrow_url_test = next((r for r in self.test_results if r['test'] == 'Urban Tomorrow Cover Image URL'), None)
        if urban_tomorrow_url_test and urban_tomorrow_url_test['passed']:
            print(f"\n🎉 SUCCESS: Urban Tomorrow magazine cover image has been successfully updated!")
            print(f"✅ New URL: {EXPECTED_URBAN_TOMORROW_URL}")
            return True
        else:
            print(f"\n❌ CRITICAL: Urban Tomorrow magazine cover image URL update verification failed!")
            return False

async def main():
    """Main test execution"""
    async with BackendTester() as tester:
        success = await tester.run_all_tests()
        return success

if __name__ == "__main__":
    print("🚀 Polymathic Futures Backend API Test Suite")
    print("🎯 Testing Urban Tomorrow Magazine Cover Image Update")
    print()
    
    try:
        success = asyncio.run(main())
        exit_code = 0 if success else 1
        print(f"\n🏁 Tests completed with exit code: {exit_code}")
        exit(exit_code)
    except KeyboardInterrupt:
        print("\n⚠️  Tests interrupted by user")
        exit(1)
    except Exception as e:
        print(f"\n💥 Unexpected error: {str(e)}")
        exit(1)