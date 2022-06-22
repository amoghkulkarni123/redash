from prefect import flow, task

@task(name="test-flow")
def test_flow(text):
    print(text)

@flow(name="ETL flow")
def my_flow(query, data_source_id, user_id):
    test_flow(query, data_source_id, user_id)

if __name__ == "__main__":
    my_flow(text="Awesome!")


