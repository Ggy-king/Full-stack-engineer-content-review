// 平衡二叉树是排序二叉树的改进版  即特殊的排序二叉树

// 排序二叉树 就是查找二叉树
/**
 * 要么是空树
 * 要么是满足以下性质的二叉树
 * 若左子树不空 则左子树上的值均小于根关键字的值
 * 若右子树不空 则右子树上的值均大于跟关键字的值
 */

// 1 平均查钊长度与树的高度有关 树的高度越小长度越小
// 2 平均查找长度越小 查找速度越快

// 故改进二叉排序树
// 1 平衡因子: 左子树的高度 - 右子树的高度
// 2 我们把 每个节点 的平衡因子的绝对值不超过一的二叉排序树称为平衡二叉树


// 方法 平衡二叉树的插入

// 直接从插入的数字找到不平衡的根节点 以根节点自下找三个元素 直接调这个三个元素即可

