import { useState } from "react";
import editor from "../css/editor.css";
import MacNav from "./MacNav";
export default function Editor() {
  const [content, setContent] = useState(
    `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)
const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)
    
const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
  const res = f(seed)
  return res ? go(f, res[1], acc.concat([res[0]])) : acc
}
  return go(f, seed, [])
}`
  );

  return (
    <div className="editor editor-green">
      <div className="editor-wraper">
        <div className="editor-header">
          <MacNav />
        </div>
        <div className="editor-body">
          <textarea
            className="editor-content"
            value={content}
            onChange={(evt) => setContent(evt.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
