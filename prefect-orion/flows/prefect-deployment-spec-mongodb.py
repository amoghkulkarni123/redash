from prefect.deployments import DeploymentSpec
from prefect.flow_runners import SubprocessFlowRunner

# DeploymentSpec(
#     name="mongodb-deployment",
#     flow_location="./prefect-task-redash-query-executor.py",
#     tags=['local'],
#     parameters={"query": {"collection": "plays"}, "data_source_id": 1, "user_id":1, "is_api_key": None, "metadata":{'Username': 'amogh+local1@immersa.co', 'query_id': '1', 'Queue': 'queries'}},
#     flow_runner=SubprocessFlowRunner(),
#     )

DeploymentSpec(
    name="mongodb-deployment",
    flow_location="./prefect-task-redash-query-executor.py",
    tags=['local'],
    parameters={"query": {"collection": "plays"}, "data_source_id": 1, "user_id":1, "is_api_key": None, "metadata":{'Username': 'amogh+local1@immersa.co', 'query_id': '1', 'Queue': 'queries'}},
    flow_runner=SubprocessFlowRunner(),
    )
