import React from "react";
import "./spinners.css";
import {
  PropagateLoader,
  PulseLoader,
  MoonLoader,
  BeatLoader,
  BarLoader,
  SyncLoader,
} from "react-spinners";

const Propagate = (props) => (
  <div className="spinner-wrapper">
    <PropagateLoader sizeUnit={"px"} loading={true} {...props} />
  </div>
);

const Pulse = (props) => (
  <div className="spinner-wrapper">
    <PulseLoader sizeUnit={"px"} loading={true} {...props} />
  </div>
);

const Moon = (props) => (
  <div className="spinner-wrapper">
    <MoonLoader sizeUnit={"px"} loading={true} {...props} />
  </div>
);

const Beat = (props) => (
  <div className="spinner-wrapper">
    <BeatLoader sizeUnit={"px"} loading={true} {...props} />
  </div>
);

const Bar = (props) => (
  <div className="spinner-wrapper">
    <BarLoader sizeUnit={"px"} loading={true} {...props} />
  </div>
);

const Sync = (props) => (
  <div className="spinner-wrapper">
    <SyncLoader sizeUnit={"px"} loading={true} {...props} />
  </div>
);

export { Propagate, Pulse, Moon, Beat, Bar, Sync };
