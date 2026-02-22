const ExampleCharacterGrid: React.FC<React.ComponentPropsWithRef<"ul">> = (props) => {
  return <ul {...props} className="grid auto-fill-16 has-[ruby+ruby]:auto-fill-36 gap-8 justify-items-center !list-none" />;
};

export default ExampleCharacterGrid;
