import PropTypes from "prop-types";

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  link,
}) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent
          key={item.id}
          {...{ [resourceName]: item }}
          link={link}
        />
      ))}
    </>
  );
};

RegularList.propTypes = {
  items: PropTypes.array,
  itemComponent: PropTypes.func,
  resourceName: PropTypes.string,
  link: PropTypes.bool,
};

export default RegularList;
