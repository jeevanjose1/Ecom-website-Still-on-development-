export const lineBreaker = (text) => {
  return text.split("|").map((item, key) => {
    return (
      <p className="detial" key={key}>
        {item}
      </p>
    );
  });
};
