import { Rootreducer } from "../reducer";
import { createStore } from "redux";

const store=createStore(Rootreducer);

export {store} ;