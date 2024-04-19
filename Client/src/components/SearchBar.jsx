function SearchBar(props) {
  const { width, height } = props;
  function submitData() {
    let input = document.querySelector(".input-value").value;
    let encodeURL = encodeURIComponent(input);

    fetch("https://valorant-tracker-production-ffb1.up.railway.app/callback", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        URL: encodeURL,
      }),
    });
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          borderRadius: "5px",
          width: width || "40%",
          height: height || "5vh",
          background: "white",
          alignItems: "center",
        }}
      >
        <img
          src="/images/V_Logomark_Red.png"
          alt=""
          style={{
            height: "100%",
            width: "6%",
            objectFit: "cover",
            background: " #192430",
          }}
        ></img>
        <input
          className="input-value"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "transparent",
            opacity: "0.9",
            padding: "0px 0px 0px 10px",
          }}
          placeholder="Search for a Player,(example:player#NA1)"
        ></input>
        <img
          src="/images/search.png"
          alt=""
          style={{ height: "80%", width: "6%", objectFit: "contain" }}
          onClick={() => submitData()}
        ></img>
      </div>
    </>
  );
}

export default SearchBar;
