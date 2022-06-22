from prefect import flow, logging, task
from redash import models


@task(name="prefect-task-redash-query-executor")
def redash_query_executor(query, data_source_id, user_id):
    data_source = models.DataSource.query.get(data_source_id)
    query_runner = data_source.query_runner

    try:
        data, error = query_runner.run_query(query, user_id)
        logging.info(data)
        return
    except Exception as e:
        logging.info(e)

@flow(name="ETL flow")
def my_flow(query, data_source_id, user_id):
    redash_query_executor(query, data_source_id, user_id)

if __name__ == "__main__":
    my_flow(query= {"collection": "plays"}, data_source_id=1, user_id=1)

