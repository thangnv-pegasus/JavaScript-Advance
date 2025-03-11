# TypeScript Advance

1. Pick trong TypeScript
 - Như tên gọi của nó, Pick là một của pháp thuộc loại utillity type nó có tác dụng lấy ra một hoặc nhiều thuộc tính của một interface khác và gán cho một type hoặc interface khác
 - Ví dụ:
    ``` javascript
        interface Todo {
            title: string;
            description: string;
            completed: string;
        }

        type TodoPreview =  Pick<Todo, "title" | "completed">

        const todo: TodoPreview = {
            title: "clean now",
            completed: false
        }
    ```

2. Omit trong TypeScript
 - Omit trong TypeScript thì có tác dụng là loại bỏ một hoặc nhiều thuộc tính của interface/type cũ và gán những thuộc tính còn lại để gán cho interface/type mới
 - Ví dụ:
 ``` javascript
    interface Todo {
        title: string;
        description: string;
        completed: boolean;
        created_at: string;
    }

    type TodoPreview = Omit<Todo, 'description'>

    const todo: TodoPreview = {
        title: 'running',
        completed: false,
        created_at: '23/12/2003'
    }
 ```

3. Partial trong TypeScript
 - Partial trong TypeScript khá đơn giản khi nó biến tất cả các thuộc tính của một interface/type thành optional
 - Ví dụ: 
 ``` javascript
    interface Todo {
        title: string;
        description: string
    }

    type TodoFlex = Partial<Todo>
    
    const todo: TodoFlex = {
        
    }
 ```



