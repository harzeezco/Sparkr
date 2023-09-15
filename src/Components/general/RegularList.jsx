import PropTypes from "prop-types";

const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
  link,
  onToggleService,
}) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent
          key={item.id}
          {...{ [resourceName]: item }}
          link={link}
          onToggleService={onToggleService}
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
  onToggleService: PropTypes.func,
};

export default RegularList;
