import React, { useState, FormEvent } from "react";
import { ExtractedKorean } from "./ExtractedKorean";
import { extractKoreanStringsFromCode } from "../utils/kor-extractor";
import { korReplacer } from "../utils/kor-replacer";
import { KoreanExtractorResults } from "../interfaces/korean-extractor-results";

export function Input() {
  const [code, setCode] = useState<string>(``);
  const [modifiedCode, setModifiedCode] = useState<string>("");

  const [koreanExtractorResult, setKoreanExtractorResult] = useState<
    KoreanExtractorResults[]
  >([]);

  const [variableNames, setVariableNames] = useState<string[]>([]);

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value);
  };

  const handleKoreanChange = (index: number, newKorean: string) => {
    const updatedResults = koreanExtractorResult.map((result, i) => {
      if (i === index) {
        return { ...result, koreanString: newKorean };
      }
      return result;
    });
    setKoreanExtractorResult(updatedResults);
  };

  const handleVariableNameChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setVariableNames(event.target.value.split("\n"));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const result = extractKoreanStringsFromCode(code);
    setKoreanExtractorResult(result);
  };

  const handleDelete = (index: number) => {
    const newKoreanExtractorResult = koreanExtractorResult.filter(
      (_, i) => i !== index,
    );
    const newVariableNames = variableNames.filter((_, i) => i !== index);
    setKoreanExtractorResult(newKoreanExtractorResult);
    setVariableNames(newVariableNames);
  };

  return (
    <div>
      <form id={"code__input"} className="input" onSubmit={handleSubmit}>
        <textarea
          className="input__textarea"
          placeholder="Input your code here"
          value={code}
          onChange={handleCodeChange}
          rows={30}
          cols={100}
          style={{ whiteSpace: "pre" }} // Preserves whitespace and formatting
        />

        <div style={{ marginTop: "10px" }}>
          <button type="submit" className="input__submit">
            analyze
          </button>
        </div>
      </form>

      <h2>2. Extracted Korean characters and it's source</h2>
      <p>{`Extracted ${koreanExtractorResult.length} Korean characters, It separated by newline`}</p>
      <textarea
        className="extractedKorean__textarea"
        rows={10}
        cols={80}
        value={koreanExtractorResult
          .map<string>((eachResult) => eachResult.koreanString)
          .join("\n")}
        readOnly={true}
      ></textarea>
      <p>{`Type the variable name to below text area, It separated by newline`}</p>

      <textarea
        className="extractedKorean__textarea"
        rows={10}
        cols={80}
        onChange={handleVariableNameChange}
        placeholder={"Put variable names, it separated by newline"}
      ></textarea>

      <div style={{ marginTop: "10px" }}>
        <button
          id={"changeVariableName"}
          onClick={() => setVariableNames([...variableNames])}
        >
          Update variable names
        </button>
      </div>

      {koreanExtractorResult.map(({ koreanString, codeLine }, index) => (
        <ExtractedKorean
          key={index}
          codeLine={codeLine}
          extractedKorean={koreanString}
          variableName={variableNames[index] || ""}
          onDelete={() => handleDelete(index)}
          onKoreanChange={(newKorean) => handleKoreanChange(index, newKorean)}
        />
      ))}

      <h2>3. Replace the Korean into PHP variable</h2>
      <p>{`Before executing this, assign variables to your assets`}</p>

      <div style={{ marginTop: "10px" }}>
        <button
          id={"replaceStringIntoVariable"}
          onClick={() =>
            setModifiedCode(
              korReplacer(
                code,
                variableNames,
                koreanExtractorResult.map<string>(
                  (result) => result.koreanString,
                ),
              ),
            )
          }
        >
          Change Korean into PHP variable
        </button>
      </div>

      <p>{`Replaced code`}</p>
      <div>
        <textarea
          className="extractedKorean__textarea"
          rows={10}
          cols={80}
          value={modifiedCode ? modifiedCode : "Not yet"}
          readOnly={true}
        ></textarea>
      </div>
    </div>
  );
}
