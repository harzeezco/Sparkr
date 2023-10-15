import PageAnimation from "../../Animation/PageAnimation";

const withPageAnimation = (WrappedComponent) => {
  const WithAnimation = (props) => (
    <PageAnimation>
      <WrappedComponent {...props} />
    </PageAnimation>
  );

  WithAnimation.displayName = `withPageAnimation(${getDisplayName(
    WrappedComponent,
  )})`;

  return WithAnimation;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withPageAnimation;
