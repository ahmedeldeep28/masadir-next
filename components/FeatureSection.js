import FeatureCard from './cards/FeatureCard'
import HeadSection from './HeadSection'

function FeatureSection() {
  return (
<section className="py-5">
        <div className="container">
          <HeadSection
            title="ما هي المميزات التي يقدمها الموقع ؟"
            text="نحن نوفر لك الكثير من المميزات والتسهيلات تساعدك في عملك ودراستك,لذالك نوفر لك كل هذه المميزات والخدمات"
          />
          <div className="row mt-4">
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-browser"
                title="مواقع الاكترونيه"
                text="الكثير من المواقع الاكترونيه المفيده لك التي نقوم بالبحث عنها وتفيرها كلها من اجلك والتي بدورها تساعدك في انجاز المهام"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-smartphone"
                title="تطبيقات الموبايل "
                text="بكل تأكيد أن اغلبنا اصبح يستخدم الموبيل المحمول بشكل يومي ومتكرر ,نحن بدورنا نقوم بالبحث عن التطبيقات المفيدة اليك"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-book"
                title="الكتب"
                text="الكتب اقدم طرق المعرفه التي استعملها الانسان من اجل التعلم ونقل والعلوم الي من يريد التعلم منها,نرشح لك الكثير من الكتب"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-computer"
                title="برامج الكمبيوتر"
                text="نقدم اليك الكثير من برامج الكمبيوتر التي تساعدك وتنجز لك المهام وتستخدمها في عملك واستخدماتك المختلفه في حياتك"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-play-alt"
                title="قنوات يوتيوب"
                text="اليوتيوب اكبر منصه علي الاطلاق تقدم فيديوهات علي مستوي العالم ويتوجد به صناع محتوي جيدين في كافة المجالات المختلفه"
              />
            </div>
            <div className="col-xs-12 col-md-6 col-lg-4 mt-3">
              <FeatureCard
                icon="fi-rr-diploma"
                title="الكثير من المواضيع المختلفه"
                text="لدينا الكثير من المحتوي المتنوع والمفيد مثل الافكار الجيده ونرشح عليك اشياء متنوعه تساعدك"
              />
            </div>
          </div>
        </div>
      </section>

  )
}

export default FeatureSection