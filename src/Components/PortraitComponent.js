function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}

// Function must start with a captial letter or it not work

export default function Gallery() {
  return (
    <section>
      <h1>Gallery</h1>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
    </section>
  );
}

export function ProfileTitle() {
  return <h1>Title</h1>;
}

export function JohnsonPortrait() {
  // need parentheses or logic after return will not be called
  return (
    <div>
      {" "}
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    ></img>
  );
}

function ShowAvatar({ person, size }) {}
