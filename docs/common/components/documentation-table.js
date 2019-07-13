import React from 'react';

const DocumentationTable = ({
  props,
}) => (
  <table className="dt--table">
    <thead className="dt--tableHead">
      <tr>
        <th className="dt--cellHeading">Prop name</th>
        <th className="dt--cellHeading">Type</th>
        <th className="dt--cellHeading">Default</th>
        <th className="dt--cellHeading">Description</th>
      </tr>
    </thead>
    <tbody>
      {props.map(prop => (
        <tr>
          <td className="dt--cell">
            <code className="dt--name">{prop.name}</code>
          </td>
          <td className="dt--cell">
            <span className="dt--type">{prop.type}</span>
          </td>
          <td className="dt--cell">
            <code className="dt--default">{prop.default}</code>
          </td>
          <td className="dt--cell">
            <span className="dt--desciption">{prop.description}</span>
          </td>
        </tr>
      ))}

    </tbody>
  </table>
);

export default DocumentationTable;
