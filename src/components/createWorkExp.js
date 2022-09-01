import React, { Component } from "react";

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
                  name="title"
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
                  name="company"
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
                  name="startDate"
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
                  name="endDate"
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
                  name="description"
                  id={descriptionWork}
                  data-id={idx}
                />
              </div>
              <div className="col p-4">
                {idx === 0 ? (
                  <button
                    onClick={() => props.add()}
                    type="button"
                    className="btn btn-primary text-center"
                  >
                    <i className="fa fa-plus-circle" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    className="btn btn-danger"
                    onClick={() => props.delete(val)}
                  >
                    <i className="fa fa-minus" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          );
        });
      };

export default CreateWorkExp;