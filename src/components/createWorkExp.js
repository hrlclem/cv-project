import React, { Component } from "react";
import data from "../data";

const CreateWorkExp = props => {
        return props.workExpArray.map((val, idx) => {

          let   titleWork = `titleWork-${idx}`,
                companyWork = `companyWork-${idx}`,
                startWork = `startWork-${idx}`,
                endWork = `endWork-${idx}`,
                descriptionWork = `descriptionWork-${idx}`;

                
          return (
            <div className="form-row" key={val.index}>
              <div className="col">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Title"
                  name="titleWork"
                  data-id={idx}
                  id={titleWork}
                />
              </div>
              <div className="col">
                <label>Company</label>
                <input
                  type="text"
                  className="form-control required"
                  placeholder="Company"
                  name="companyWork"
                  id={companyWork}
                  data-id={idx}
                />
              </div>
              <div className="col">
                <label>Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Start Date"
                  name="startWork"
                  id={startWork}
                  data-id={idx}
                />
              </div>
              <div className="col">
                <label>End date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="End Date"
                  name="endWork"
                  id={endWork}
                  data-id={idx}
                />
              </div>
              <div className="col">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="descriptionWork"
                  id={descriptionWork}
                  data-id={idx}
                />
              </div>
              <div className="col p-4">
                {idx === 0 ? (
                    <div className="buttons">
                        <button
                            onClick={() => props.add()}
                            type="button"
                            className="btn btn-primary text-center"
                            >
                            Add
                        </button>
                        <button
                            className="btn btn-danger"
                            onClick={() => props.onClick(val)}
                            >
                            Display
                        </button>
                        </div>
                ) : (
                    <div className="buttons">
                        <button
                        onClick={() => props.add()}
                        type="button"
                        className="btn btn-primary text-center"
                        >
                        Add
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => props.onClick(val)}
                        >
                        Display
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => props.delete(val)}
                        >
                        Delete
                    </button>
                  </div>

                )}
              </div>
            </div>
          );
        });
      };

export default CreateWorkExp;