import { useState } from "react";
const FileExplorer = (props) => {
  const { data, style, index, title } = props;
  return (
    <li style={style} title={title} index={index}>
      <span role="img" aria-label="file">
        📃
      </span>
      {data.name}
    </li>
  );
};

const FolderExplorer = (props) => {
  const { data, ShowComponent, style, index, title } = props;
  return data.isFolder ? (
    <li title={title} index={index} onClick={ShowComponent} style={style}>
      <span role="img" aria-label="folder">
        📂
      </span>{" "}
      {data.name}
    </li>
  ) : (
    <FileExplorer data={data} style={style} title={data.name} index={index} />
  );
};

const Explorer = (props) => {
  const { data } = props;
  const [show, setShow] = useState(true);
  const ShowComponent = () => {
    setShow(!show);
  };
  return (
    <ul style={{ cursor: "pointer" }}>
      {data &&
        data.map((data, index) => {
          return (
            <>
              {" "}
              <FolderExplorer
                data={data}
                ShowComponent={ShowComponent}
                index={index}
                title={data.name}
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  width: "inherit",
                  whiteSpace: "nowrap"
                }}
              />
              {!show ? <Explorer data={data.items} key={index} /> : <></>}
            </>
          );
        })}
    </ul>
  );
};

export default Explorer;
