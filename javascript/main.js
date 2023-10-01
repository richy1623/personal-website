const glow = document.getElementById("glow");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  glow.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 5000, fill: "forwards" }
  );
};
