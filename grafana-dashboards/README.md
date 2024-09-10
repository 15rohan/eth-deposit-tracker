# Grafana Dashboard

This directory contains the JSON file for a Grafana dashboard used for monitoring and visualization.

## Dashboard

- **eth-deposit-dashboard.json**: Contains multiple panels, including:
  - **Average Gas Prices by the Hour**: Shows fluctuations in gas prices over the last 24 hours.
  - **24-Hour Deposits Heatmap**: Displays a heatmap of deposit counts over a 24-hour period.

## How to Import the Dashboard into Grafana

1. Open Grafana and navigate to the **Dashboards** section.
2. Click on **Import**.
3. Choose the **Upload JSON file** option and select the `eth-deposit-dashboard.json` file from this directory.
4. Use the MongoDB Plugin and MongoDB Data Source.

## Configuration Notes

- Ensure that your Grafana instance is connected to the MongoDB Data Source
- Update any relevant variables or settings according to your environment.

For more information on Grafana and how to use it, visit the [Grafana Documentation](https://grafana.com/docs/).
