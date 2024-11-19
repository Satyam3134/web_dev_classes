import { Icon } from "@iconify/react/dist/iconify.js";
import { nevMenu } from "../../data";

export default function NavBar() {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <section>
          <h1>Logo</h1>
        </section>
        <section>
          <ul style={{ display: "flex" }}>
            {nevMenu?.map((data, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <p>{data?.name}</p>
                <Icon icon={data?.icon} />
              </li>
            ))}
          </ul>
        </section>
        <section>
          <button>Login</button>
        </section>
      </nav>
    </>
  );
}
