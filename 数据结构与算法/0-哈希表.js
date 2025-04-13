// 哈希: hash
// 概念: 无限的字符 --hashing--> 有限的数字  (高效)
// 键 -> 哈希函数 -> 被哈希函数处理过整数 -> 找到响应地址再返回值 

// 哈希 不等于 加密
/**
 * 哈希是不可逆的
 * 加密是可逆的
 */


// 1 哈希表也是一种存储方式
// 2 采用键值对的方式存储
// 3 python中的字典 js中的Map就是采用哈希表实现

/**
 * 哈希函数
 * 1 哈希表中的键不会对应地址
 * 2 哈希表中的键会被运算成数字 根据其数字才会找到相应的地址
 * 3 此运算被称为哈希函数
 * 4 哈希函数有很多种实现方式 也有很多种形式 如相加后取余
 * 5 遵守一 不可逆
 * 6 遵守二 相同输入相同输出(输出必不变,输出为整) 不同输入不同输出(尽量)
 */

/**
 * 冲突/碰撞
 * 1 不同的输入可以得到相同的输出
 * 2 封闭寻址法 如发生碰撞时将其位置设置成链表 但容易发生集群
 * 3 开放寻址法 如发生碰撞就向下找空的位置填进去 但容易发生一次聚集现象
 * 4 开放寻址法还有双重哈希 布谷鸟等等方法
 */

// 但都不能完美解决实际问题
// 因此有了哈希算法

/**
 * 哈希算法
 * 1 MD5
 * 2 SHA
 */

/**
 * 应用
 * 数据检索
 * 密码保存
 * 文件对比
 * 数字签名
 * 数字指纹等
 */