import {
  Area,
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
      <ComposedChart data={ data }>
        <Legend layout='vertical' align='right' verticalAlign='middle' height={36} />
        <XAxis dataKey='period'><Label value='Period'/></XAxis>
        <YAxis yAxisId='left'><Label value='Properties Planned' angle={-90} /></YAxis>
        <YAxis yAxisId='right' orientation='right'><Label value='Properties Occupied' angle={90}/></YAxis>
        <Area name='Planned' legendType='rect' dataKey='planningConsents' yAxisId='left' fill='hsla(120, 50%, 50%, 0.5)' stroke='hsla(120, 50%, 50%, 0.9)'/>
        <Line name='Completed' type='step' legendType='line' dot={false} dataKey='occupations' yAxisId='right'/>
      </ComposedChart>
    </ResponsiveContainer>
  )
}
