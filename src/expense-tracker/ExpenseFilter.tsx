import categories from '../constant/categories';


interface Props {
    onSelectCategory: (catergory: string) => void
}


const ExpenseFilter = ({onSelectCategory}: Props) => {
  return (
    <select className="form-select my-3" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter