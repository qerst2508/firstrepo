from azure.identity import DefaultAzureCredential
import psycopg2
import os

connection_string = os.getenv('dbname=webtest-database host=webtest-server.postgres.database.azure.com port=5432 sslmode=require user=xftbkcjbmx password=nFdUYe$JEl1gV0dT')
connection = psycopg2.connect(connection_string)
print("Connection established")

connection.close()