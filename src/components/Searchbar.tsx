import Input from 'components/Input'

interface Props {
  value: string,
  onChange: (value: string) => void
}

const Searchbar: React.FC<Props> = ({ value, onChange }) => (
  <Input placeholder="Search" icon="search" iconPlacement="left" value={value} onChange={(e) => onChange(e.target.value)} />
)

export default Searchbar
