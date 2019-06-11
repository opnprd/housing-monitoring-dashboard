import {
  Area,
  Bar,
  BarChart,
  ComposedChart,
  Label,
  Legend,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

// Expected data format contains:
//  period
//  planningConsents
//  occupations
export default function Summary(props) {
  const { data } = props;

  return (
    <ResponsiveContainer width='100%' height={ 600 }>
      <BarChart data={ data }>
        <Legend layout='vertical' align='right' verticalAlign='middle' height={36} />
        <XAxis dataKey='period'><Label value='Period'/></XAxis>
        <YAxis yAxisId='properties' domain={[0, 4000]}><Label value='Properties' angle={-90} /></YAxis>
        <Bar name='Planned'
          dataKey='planningConsents'
          yAxisId='properties'
          legendType='rect'
          fill='hsla(240, 50%, 50%, 0.5)'
          stroke='hsla(240, 50%, 50%, 0.9)'/>
        <Bar name='Completed'
          dataKey='occupations'
          yAxisId='properties'
          legendType='rect'
          fill='hsla(120, 50%, 50%, 0.5)'
          stroke='hsla(120, 50%, 50%, 0.9)'/>
      </BarChart>
    </ResponsiveContainer>
  )
}
