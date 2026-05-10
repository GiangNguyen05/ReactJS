import { EXAMPLES } from "../../../data.js";
export default function ContentAll({ selectedMenu }) {
  const content = EXAMPLES[selectedMenu];

  // 2. Nếu không tìm thấy (ví dụ selectedMenu là "Home" nhưng data.js không có key "Home")
  return (
    <div className="content-container">
      {!content ? (
        <p>Vui lòng chọn một danh mục hợp lệ.</p>
      ) : (
        <>
          <h2>{content.title}</h2>
          <p>{content.desc}</p>
          <pre>
            <code>{content.code}</code>
          </pre>
        </>
      )}
    </div>
  );
}
