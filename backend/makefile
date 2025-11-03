.PHONY: run setup seed mongo

run:
	@echo "Starting server..."
	@source venv/bin/activate && uvicorn server:app --reload --host 0.0.0.0 --port 8000

setup:
	python3 -m venv venv
	source venv/bin/activate && pip install -r requirements.txt

seed:
	@source venv/bin/activate && python seed_database.py

mongo:
	brew services start mongodb-community
