export class Node {
  private data = null
  private left = null
  private right = null

  constructor (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }

  public show () {
    console.log(this.data)
  }
}

export default class ErChaShu {
  public root = null

  public showTree (root = this.root) {
    console.log(this.root)
  }

  public insert (data) {
    const node = new Node(data, null, null)
    // 根节点
    if (!this.root) {
      this.root = node
      return
    }

    let current = this.root

    while (current) {
      if (current.data > data) {
        if (current.left === null) {
          current.left = node;
          break
        }
        current = current.left;
        console.log('current---1', current)
      } else {
        if (current.right === null) {
          current.right = node
          break
        }
        current = current.right;
        console.log('current---2', current)
      }
    }
  }

  find (data) {
    let current = this.root
    while (true) {
      if (data === current.data) {
        return current
      }

      current = data > current.data ? current.right : current.left
      if (current === null) {
        return null
      }
    }
  }

  getDeep (node, deep) {
    let selfDeep = deep || 0
    if (node === null) {
      return selfDeep
    }
    selfDeep ++
    console.log('left==>', node.left, selfDeep)
    console.log('right==>',node.right, selfDeep)
    console.log('------ split -------')

    const left = this.getDeep(node.left, selfDeep)
    const right = this.getDeep(node.right, selfDeep)
    return Math.max(left, right)
  }

  // 前序遍历
  public frontEach (root) {
    const selfEach = (root, arr = []) => {
      if (root) {
        arr.push(root.data)
        selfEach(root.left, arr)
        selfEach(root.right, arr)
      }
      return arr
    }
    const eachTree = selfEach(root)
    return eachTree
  }

  // 中序遍历 结果 返回二叉树 (递归)
  public midEach (root) {
    const selfEach = (root, arr = []) => {
      if (root) {
        selfEach(root.left, arr)
        arr.push(root.data)
        selfEach(root.right, arr)
      }
      return arr
    }
    const eachTree = selfEach(root)
    return eachTree
  }

  // 后序遍历
  public afterEach (root) {
    const selfEach = (root, arr = []) => {
      if (root) {
        selfEach(root.left, arr)
        selfEach(root.right, arr)
        arr.push(root.data)
      }
      return arr
    }
    const eachTree = selfEach(root)
    return eachTree
  }

  // 前序遍历  非递归
  public frontEachNoRecursion (root) {
    const result = []
    const stack = []

    let current = root
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current)
        result.push(current)
        current = current.left
      }
      current = stack.pop()
      current = current.right
    }
    return result
  }

  // 中序遍历 非递归
  public midEachNoRecursion (root) {
    const result = []
    const stack = []

    let current = root
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current)
        current = current.left
      }
      current = stack.pop()
      result.push(current.data)
      current = current.right
    }
    return result
  }

  // 非遍历的 后序遍历二叉树
  public afterEachNoRecursion (root) {
    const result = []
    const stack = []
    let current = root
    let last
    while (current || stack.length > 0) {
      while (current) {
        stack.push(current)
        current = current.left
      }
      current = stack[stack.length - 1];
      if (!current.right || current.right == last) {
        current = stack.pop();
        result.push(current.data);
        last = current;
        current = null; // 继续弹栈
      } else {
        current = current.right;
      }
    }
    return result
  }

  // 重建二叉树
  // rebuildTree ()
}