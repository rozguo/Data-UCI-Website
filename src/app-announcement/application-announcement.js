import "./application-announcement.css";
const AppBanner = () => {
  return (
    <div className="banner">
      <p style={{ color: "white" }}>
        We're recruiting board members! Find the application {""}
        <a
          href="https://forms.gle/pqcJHL2F8AB9EGvE9"
          style={{ color: "white" }}
        >
          here.
        </a>
      </p>
    </div>
  );
};

export default AppBanner;
