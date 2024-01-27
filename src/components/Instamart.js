import { useState } from "react";

function Section(props) {
  return (
    <div className="w-[97%] m-4 p-2 border-solid border-2 border-black rounded-md">
    <div className=" flex justify-between">
      <h3>{props.title}</h3>
      {props.isVisible ? (
        <>
          <button
            className="p-1 text-lg "
            onClick={() => {
              {
                props.setVisible(false);
              }
            }}
          >
            🔼
          </button>
        </>
      ) : (
        <>
          <button
            className="p-1 text-lg"
            onClick={() => {
              {
                props.setVisible(true);
              }
            }}
          >
            🔽
          </button>
        </>
      )}
    </div>
     <div>{props.isVisible  && <p>{props.desc}</p>}</div>
    </div>
  );
}

function Instamart() {
  const [sectionConfig, setSectionConfig] = useState("");

  return (
    <div className="min-h-[100vh] ">
      <div className="flex flex-wrap justify-center items-center m-4">
        <h1 className=" text-blue-700 font-bold text-4xl align-middle underline">
          Instamart
        </h1>
      </div>
      <div>
        <Section
          title={"About Instamart"}
          desc={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere exercitationem sapiente doloremque nobis nostrum, maiores laudantium voluptatem placeat fugiat consequatur excepturi explicabo iure rem pariatur adipisci maxime iste. Dicta laudantium id quidem! Voluptatum saepe debitis, ea minus architecto consequatur assumenda impedit iusto! Perferendis officiis blanditiis asperiores alias perspiciatis possimus accusantium, expedita nisi qui vero nostrum soluta. Fuga eaque labore rerum explicabo, placeat veniam saepe doloribus eligendi amet autem, tempora possimus iusto veritatis incidunt officia aliquid! Natus dignissimos sapiente magni autem ratione debitis quis tempore vitae suscipit placeat optio quaerat, aliquid, nemo minima earum neque obcaecati harum iure nihil sunt eveniet!"
          }
          isVisible={sectionConfig === "about"}
          setVisible={(res) =>{
            console.log(res)
            if(res===true)
            setSectionConfig("about")
            else
            setSectionConfig("")
          }}
        ></Section>
        <Section
          title={"Products"}
          desc={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere exercitationem sapiente doloremque nobis nostrum, maiores laudantium voluptatem placeat fugiat consequatur excepturi explicabo iure rem pariatur adipisci maxime iste. Dicta laudantium id quidem! Voluptatum fg saepe debitis, ea minus architecto consequatur assumenda impedit iusto! Perferendis officiis blanditiis asperiores alias perspiciatis possimus accusantium, expedita nisi qui vero nostrum soluta. Fuga eaque labore rerum explicabo, placeat veniam saepe doloribus eligendi amet autem, tempora possimus iusto veritatis incidunt officia aliquid! Natus dignissimos sapiente magni autem ratione debitis quis tempore vitae suscipit placeat optio quaerat, aliquid, nemo minima earum neque obcaecati harum iure nihil sunt eveniet!"
          }
          isVisible={sectionConfig === "product"}
          setVisible={(res) =>{
            console.log(res)
            if(res===true)
            setSectionConfig("product")
            else
            setSectionConfig("")
          }}
        ></Section>
        <Section
          title={"Support"}
          desc={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere exercitationem sapiente doloremque nobis nostrum, maiores laudantium voluptatem placeat fugiat consequatur excepturi explicabo iure rem pariatur adipisci maxime iste. Dicta laudantium id quidem! Voluptatum saepe debitis, ea minus architecto consequatur assumenda impedit iusto! Perferendis officiis blanditiis asperiores alias perspiciatis possimus accusantium, expedita nisi qui vero nostrum soluta. Fuga eaque labore rerum explicabo, placeat veniam saepe doloribus eligendi amet autem, tempora possimus iusto veritatis incidunt officia aliquid! Natus dignissimos sapiente magni autem ratione debitis quis tempore vitae suscipit placeat optio quaerat, aliquid, nemo minima earum neque obcaecati harum iure nihil sunt eveniet!"
          }
          isVisible={sectionConfig === "support"}
          setVisible={(res) =>{
            console.log(res)
            if(res===true)
            setSectionConfig("support")
            else
            setSectionConfig("")
          }}
        ></Section>
      </div>
    </div>
  );
}

export default Instamart;
