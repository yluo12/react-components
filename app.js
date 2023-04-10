const GroceryList = () => (
  <>
    <h2>Grocery List</h2>
    <GroceryListItem lists={['Bread', 'Peanut Butter', 'Jam']} />
  </>
);

const EachItem = (props) => {
  const [isBold, setIsBold] = React.useState(false);
  const style = {
    fontWeight: isBold ? 'bold' : 'normal'
  };
  return (<li style={style}
    onMouseEnter={() => setIsBold(!isBold)}
    onMouseLeave={() => setIsBold(!isBold)}>
      {props.item}
      </li>);
};

const GroceryListItem = (props) => {
  const onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      {props.lists.map((item) => (
        <EachItem item={item}/>
      ))}
    </ul>
  );
};


ReactDOM.render(<GroceryList />, document.getElementById('app'));