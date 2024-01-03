import "./ExtractedKorean.css";
export function ExtractedKorean(props: {
  codeLine: string;
  extractedKorean: string;
  variableName?: string;
}) {
  return (
    <div className={"extractedKorean"}>
      <div className={"extractedKorean__section"}>
        <p className={"extractedKorean__paragraph"}>Source Code Line</p>
        <textarea
          className="extractedKorean__textarea"
          rows={10}
          cols={50}
          value={"mock codeline"}
          readOnly={true}
        ></textarea>
      </div>

      <div className={"extractedKorean__section"}>
        <p className={"extractedKorean__paragraph"}>Extracted Korean</p>
        <textarea
          className="extractedKorean__textarea"
          rows={5}
          cols={30}
          value={props.extractedKorean}
          readOnly={true}
        ></textarea>
      </div>

      <div className={"extractedKorean__section"}>
        <p className={"extractedKorean__paragraph"}>Variable Name</p>
        <textarea
          className="extractedKorean__textarea"
          rows={5}
          cols={30}
          value={props.variableName}
          readOnly={true}
        ></textarea>
      </div>
    </div>
  );
}
