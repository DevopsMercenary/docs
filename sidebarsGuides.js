/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

module.exports = {
  guides: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'overview',
        'airflow-passing-data-between-tasks',
        'airflow-database',
        'airflow-executors-explained',
        'airflow-components',
        'airflow-branch-operator',
        'airflow-pools',
        'airflow-scaling-workers',
        'airflow-importing-custom-hooks-operators',
        'airflow-sql',
        'airflow-decorators',
        'connections',
        'dag-best-practices',
        'custom-xcom-backends',
        'bashoperator',
        'debugging-dags',
        'deferrable-operators',
        'intro-to-airflow',
        'kubepod-operator',
        'logging',
        'managing-airflow-code',
        'subdags',
        'rerunning-dags',
        'managing-dependencies',
        'task-groups',
        'what-is-a-hook',
        'using-airflow-plugins',
        'testing-airflow',
        'templating',
        'dags',
        'what-is-a-sensor',
        'what-is-an-operator',
        'dynamically-generating-dags',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'overview',
        'execute-notebooks'
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'overview',
        'airflow-azure-data-factory-integration',
        'airflow-azure-data-explorer',
        'airflow-openlineage',
        'airflow-dbt',
        'airflow-databricks',
        'airflow-sagemaker',
        'airflow-redshift',
        'airflow-kedro',
        'airflow-great-expectations',
        'airflow-talend-integration',
        'airflow-sql-data-quality-tutorial',
        'astro-python-sdk-etl',
        'soda-data-quality',
      ],
    },
  ],
};
