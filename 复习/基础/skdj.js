// 计算N周期内的最低价  
function getLLV(prices, start, N) {
    let minPrice = prices[start];
    for (let i = start + 1; i <= start + N - 1; i++) {
        minPrice = Math.min(minPrice, prices[i]);
    }
    return minPrice;
}

// 计算N周期内的最高价  
function getHHV(prices, start, N) {
    let maxPrice = prices[start];
    for (let i = start + 1; i <= start + N - 1; i++) {
        maxPrice = Math.max(maxPrice, prices[i]);
    }
    return maxPrice;
}

// 计算未成熟随机值RSV  
function calculateRSV(prices, N) {
    const rsv = [];
    for (let i = N - 1; i < prices.length; i++) {
        const llv = getLLV(prices, i - N + 1, N);
        const hhv = getHHV(prices, i - N + 1, N);
        const rsvValue = (prices[i] - llv) / (hhv - llv) * 100;
        rsv.push(rsvValue);
    }
    // RSV数组前面补undefined，直到达到足够的长度  
    for (let i = 0; i < N - 1; i++) {
        rsv.unshift(undefined);
    }
    return rsv;
}

// 计算指数平滑移动平均线(EMA)  
function calculateEMA(values, period) {
    const ema = [];
    let k = 2 / (period + 1);
    let previousEma = values[0];
    ema.push(previousEma);
    for (let i = 1; i < values.length; i++) {
        previousEma = (values[i] - previousEma) * k + previousEma;
        ema.push(previousEma);
    }
    return ema;
}

// 计算KDJ指标  
function calculateKDJ(prices, N, M1, M2) {
    const rsv = calculateRSV(prices, N);
    const K = calculateEMA(rsv, M1);
    const D = calculateEMA(K, M2);
    const J = 3 * K - 2 * D;
    return { K, D, J };
}


// 假设的SKDJ指标计算，通过增加EMA的周期来得到慢速K线和D线  
function calculateSKDJ(prices, N, M1, M2, SKM1, SKM2, SDM1, SDM2) {
    const { K, D } = calculateKDJ(prices, N, M1, M2);
    const SK = calculateEMA(K, SKM1);
    const SDK = calculateEMA(D, SDM1);
    const SJK = 3 * SK - 2 * SDK; // 同样，我们可以计算慢速J线，如果需要的话  
    return { SK, SDK, SJK }; // 返回慢速K线、D线和J线  
}

const prices = [/* 价格数组，包含每日的收盘价 */]; // 替换为实际的价格数据  
const N = 9; // KDJ中的N值，即RSV的计算周期  
const M1 = 3; // K线的EMA周期


// EMA(X,N)：求N周期X值的指数加权移动平均（平滑移动平均）。
// 注：
// 1、N包含当前k线。
// 2、对距离当前较近的k线赋予了较大的权重。
// 3、当N为有效值，但当前的k线数不足N根，按N根计算。
// 4、N为0或空值时返回值为空值。
// 5、N可以为变量

EMA(X,N)=2*X/(N+1)+(N-1)*REF(EMA(X,N),1)/(N+1)

// 引用X在N个周期前的值。
// 注：
// 1、当N为有效值，但当前的k线数不足N根，返回空值；
// 2、N为0时返回当前X值；
// 3、N为空值时返回空值。

例1:
REF(X,N); //表示引用当前周期前第5个周期的收盘价。

{
    你应该知道的是做交易不应该是死板的程序,如果你可以做到程序像人脑一样灵活,那才是最完美的量化

    你还记得你当时的计划吗,为什么不试着完成一下呢,万一成功了呢

    好迷茫,痛苦
}


