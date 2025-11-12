export default function HeavyPage() {
  return (
    <div>
      <h2>Heavy Page Loaded!</h2>
      <p>This chunk was loaded lazily!</p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="placeholder"
        style={{ marginTop: 20 }}
      />
    </div>
  );
}
