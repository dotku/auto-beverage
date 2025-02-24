import { Coffee, ShoppingCart, Award, Clock, Settings, Shield, Droplets, Sparkles, Zap } from 'lucide-react';

type Seller = { 
  helen: string;
  leo: string;
}

const sellers: Seller = {
  "helen": "wxid_mshnxf7rr89o22",
  "leo": "xinmai002leo"
}

function App() {
  const products = [
    {
      id: 1,
      name: "智能多功能饮品机",
      description: "一体化智能饮品制作系统，支持咖啡、奶茶、果汁等多种饮品",
      price: 29999,
      features: ["AI智能配方", "自动清洗消毒", "原料智能补给", "云端数据分析"],
      image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: 2,
      name: "商用饮品机器人",
      description: "革命性机器人调饮系统，提供稳定、卫生、高效的饮品制作服务",
      price: 39999,
      features: ["机械臂精准控制", "多工位并行制作", "智能排队系统", "远程运维支持"],
      image: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  const query = new URLSearchParams(window.location.search);
  const seller = query.get("seller");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Sparkles className="h-8 w-8 mr-2" />
              <h1 className="text-2xl font-bold">智饮未来</h1>
            </div>
            <nav>
              <button className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                <ShoppingCart className="h-5 w-5" />
                <span>购物车</span>
              </button>
            </nav>
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold mb-4">未来饮品解决方案</h2>
            <p className="text-xl text-gray-200">智能化饮品制作，引领餐饮新革命</p>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">高效智能</h3>
              <p className="text-gray-600">AI智能配方，多任务并行处理</p>
            </div>
            <div className="text-center">
              <Droplets className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">多样选择</h3>
              <p className="text-gray-600">咖啡、奶茶、果汁一机搞定</p>
            </div>
            <div className="text-center">
              <Settings className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">智能运维</h3>
              <p className="text-gray-600">远程监控，自动补给</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">产品演示</h2>
          <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
            <video src="/5022_1740374424.mp4" className="w-full h-full" controls />
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-gray-300">
              体验智能饮品机器人的完美服务
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">革新产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">核心功能：</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Shield className="h-4 w-4 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">¥{product.price}</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      立即咨询
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">智能饮品解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Coffee className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">多品类支持</h3>
                  <p className="text-gray-600">支持咖啡、奶茶、果汁等多种饮品制作，轻松应对不同场景需求</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">高效制作</h3>
                  <p className="text-gray-600">多工位并行制作，高峰期轻松应对，提升运营效率</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">品质保证</h3>
                  <p className="text-gray-600">精准控温控量，确保每一杯饮品的口感品质</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">数据赋能</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold">智能库存管理</p>
                  <p className="text-gray-600">实时监控原料库存，自动补给预警</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold">销售数据分析</p>
                  <p className="text-gray-600">深度分析销售趋势，优化产品结构</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold">远程运维支持</p>
                  <p className="text-gray-600">24小时远程监控，及时处理异常</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">开启智能饮品新时代</h2>
          <p className="text-xl mb-8">联系我们，了解更多产品信息和合作方案</p>
          <div className="text-lg mb-8">
            {seller ? <p>📧 微信：{sellers[seller.toLocaleLowerCase() as keyof Seller]}</p> : null}
            <p>📍 地址：广东深圳</p>
          </div>
          <div className="inline-flex space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              预约演示
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              获取方案
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">智饮未来</span>
          </div>
          <p className="text-gray-400">© 2025 智饮未来科技. 保留所有权利 v0.1.0</p>
        </div>
      </footer>
    </div>
  );
}

export default App;