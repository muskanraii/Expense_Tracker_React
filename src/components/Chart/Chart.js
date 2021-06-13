import "./Chart.css";
import ChartBar from "./chartBar";

const Chart = (props) =>{

    const dataValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxDataValue = Math.max(...dataValue);
    return(
    <div className="chart">
        {props.dataPoints.map((dataPoint) => (<ChartBar key={dataPoint.id} value={dataPoint.value} maxValue={maxDataValue} label={dataPoint.label} />))}
    </div>
    )
}

export default Chart;