# THtodoapp
++ Two way data binding trong React (cập nhật trạng thái giữa component cha - con) ++++++++++++

Trong React, cách thông thường để cập nhật trạng thái giữa component cha và con là sử dụng mô hình "props drilling" hoặc "lifting state up". Tuy nhiên, không có cơ chế "two-way data binding" trực tiếp trong React.

Trong mô hình "props drilling", bạn truyền props từ component cha xuống component con thông qua các cấp trung gian. Khi trạng thái thay đổi ở component con, bạn sẽ sử dụng callback function được truyền từ component cha để cập nhật lại trạng thái ở component cha. Điều này tạo ra một luồng dữ liệu một chiều từ component cha đến component con.

Ví dụ về props drilling:

```jsx
// Component cha
function ParentComponent() {
  const [data, setData] = useState('');

  const handleChange = (value) => {
    setData(value);
  };

  return (
    <div>
      <ChildComponent data={data} onChange={handleChange} />
    </div>
  );
}

// Component con
function ChildComponent({ data, onChange }) {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleInputChange} />
    </div>
  );
}
```

Một cách khác để cập nhật trạng thái giữa component cha và con là sử dụng các thư viện quản lý trạng thái như Redux hoặc MobX. Những thư viện này cung cấp một cơ chế quản lý trạng thái trung gian, cho phép các component truy cập và cập nhật trạng thái một cách dễ dàng mà không cần thông qua props.

Nếu bạn thực sự muốn sử dụng two-way data binding trong React, bạn có thể sử dụng các thư viện hoặc các giải pháp bên ngoài như React Hooks Form hoặc Formik. Những thư viện này cung cấp các phương pháp để liên kết dữ liệu giữa các input và trạng thái trong React một cách tự động và thuận tiện.

Ví dụ về sử dụng React Hooks Form:

```jsx
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, setValue } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input {...register('email')} />
      <input type="submit" value="Submit" />
    </form>
  );
}
```

Trong ví dụ trên, khi người dùng nhập dữ liệu vào các input, React Hooks Form sẽ tự động cập nhật giá trị vào trạng thái nội bộ và truyền giá trị đó vào hàm `onSubmit` khi người dùng nhấn

 nút submit.


 ++++++++++++++++++++++++++++++Tìm hiểu về Context trong React? Context giải quyết vấn đề gì so với cách dùng State và truyền dữ liệu giữa thành phần cha con +++++++++++++++++++++++++

 
 Context trong React là một tính năng cho phép bạn chia sẻ dữ liệu giữa các thành phần trong cây component mà không cần truyền props qua nhiều cấp con. Nó giúp giải quyết vấn đề của "props drilling" và cung cấp một cách tiện lợi để truyền dữ liệu giữa các thành phần trong ứng dụng React.

Với Context, bạn có thể tạo ra một context provider ở một thành phần cha và các thành phần con trong cây component có thể truy cập vào dữ liệu được chia sẻ trong context đó mà không cần truyền props. Khi dữ liệu trong context thay đổi, các thành phần con sẽ được tự động cập nhật.

Cách sử dụng Context mới nhất trong React là sử dụng React Hooks (React 16.8+). Dưới đây là một ví dụ về cách sử dụng Context để chia sẻ dữ liệu giữa thành phần cha và con:

```jsx
// Tạo context
const MyContext = React.createContext();

// Component cha cung cấp dữ liệu vào context
function ParentComponent() {
  const [data, setData] = useState('Hello, world!');

  return (
    <MyContext.Provider value={data}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

// Component con sử dụng dữ liệu từ context
function ChildComponent() {
  const data = useContext(MyContext);

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
```

Trong ví dụ trên, `MyContext.Provider` đóng vai trò là context provider và truyền dữ liệu `data` vào context thông qua prop `value`. Trong `ChildComponent`, `useContext` được sử dụng để lấy dữ liệu từ context.

Một điểm mạnh của Context là khả năng truyền dữ liệu giữa các cấp con trong cây component mà không cần truyền props qua các cấp trung gian. Điều này giúp giảm bớt sự phức tạp của "props drilling" và làm cho mã nguồn dễ đọc hơn.

Tuy nhiên, khi sử dụng Context, hãy lưu ý rằng nếu bạn có nhiều thành phần con sử dụng dữ liệu từ cùng một context, việc cập nhật dữ liệu trong context có thể gây ra việc cập nhật lại tất cả các thành phần con đó. Điều này có thể ảnh hưởng đến hiệu năng của ứng dụng.
