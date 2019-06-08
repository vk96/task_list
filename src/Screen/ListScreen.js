import React from "react";
import { Header, List } from "../components";
import { PaperWrapper } from "../styled-components";
import data from "../data";

export default function ListScreen() {
  return (
    <div>
      <Header title="Task Manager" addIcon />
      <PaperWrapper width={"90%"} background="#f7f7f7">
        <List title="Task List" data={data} />
      </PaperWrapper>
    </div>
  );
}
