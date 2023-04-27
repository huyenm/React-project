export default function Input({label, placeholder, type, value, setResult}){
    return (
        <div className="input-group">
          <label >{ label }</label>
          <input placeholder={placeholder} type={type}  value={value} onChange={(e) => setResult(e.target.value)} required />
        </div>
    )
}