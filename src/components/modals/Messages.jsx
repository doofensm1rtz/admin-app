import useComponentVisible from "../../lib/custom-hooks/useComponentVisible";

export default function Messages({ setVisibility }) {
  const { ref } = useComponentVisible(true, setVisibility);

  return (
    <div ref={ref} className="notification-panel">
      <span className="notification-header">3 new messages</span>
      <div className="notification-list">
        <div className="notification-list-item">
          <img
            className="notification-image"
            src="https://images.unsplash.com/photo-1528234591865-8c4f372b3f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
          <div className="notification-text">
            <span className="notification-text-header">Aldair Vagas</span>
            <span className="notification-text-content">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </div>
        <div className="notification-list-item">
          <img
            className="notification-image"
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=296&q=80"
            alt=""
          />
          <div className="notification-text">
            <span className="notification-text-header">Daniel Montrieo</span>
            <span className="notification-text-content">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </div>
        <div className="notification-list-item">
          <img
            className="notification-image"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
          <div className="notification-text">
            <span className="notification-text-header">Luis Reynoso</span>
            <span className="notification-text-content">
              Lorem ipsum dolor sit amet.
            </span>
          </div>
        </div>
      </div>
      <span className="notification-footer">Show all messages</span>
    </div>
  );
}
