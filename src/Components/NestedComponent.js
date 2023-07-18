import { ProfileTitle } from "./PortraitComponent";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function CardProfile() {
  return (
    <Card>
      <ProfileTitle></ProfileTitle>
    </Card>
  );
}
