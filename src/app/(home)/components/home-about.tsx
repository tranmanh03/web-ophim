import HomeTopDesc from '@/app/(home)/components/home-top-desc'
import React from 'react'

export default function HomeAbout() {
  const topNewFeatures = {
    title: 'Các tính năng mới khi xem phim online tại OPhim',
    desc: '',
    topListData: [
      {
        header: 'Xem phim không giới hạn, hoàn toàn miễn phí',
        desc: 'Một trong những yếu tố thu hút nhất của OPhim chính là người dùng có thể xem phim HD miễn phí mà không cần phải chi trả bất kỳ khoản phí nào. Bạn sẽ có cơ hội trải nghiệm hàng nghìn bộ phim phim chiếu rạp hot nhất mà không cần phải mua vé hay đăng ký tài khoản.'
      },
      {
        header: 'Kho phim đa dạng và phong phú',
        desc: 'OPhim mang đến cho khán giả một kho phim đa dạng với đủ mọi thể loại từ phim hành động, phim tâm lý tình cảm, phim cổ trang, cho đến những bộ phim hài hước. Ngoài ra, các bộ phim từ nhiều quốc gia như phim Hàn Quốc, phim Thái Lan, phim Nhật Bản, phim Trung Quốc, và phim Việt Nam luôn được cập nhật nhanh chóng.'
      },
      {
        header: 'Giao diện đẹp mắt, dễ dàng sử dụng và tối ưu',
        desc: 'Giao diện của OPhim được thiết kế thân thiện với người dùng, giúp việc tìm kiếm và xem phim HD trở nên dễ dàng hơn bao giờ hết. Trang web phim miễn phí này có hệ thống danh mục rõ ràng, giúp bạn nhanh chóng tìm thấy bộ phim mà mình yêu thích mà không mất quá nhiều thời gian.'
      },
      {
        header: 'Tốc độ tải nhanh chóng, ổn định',
        desc: 'Không còn gì khó chịu hơn khi đang thưởng thức một bộ phim hấp dẫn mà video bị gián đoạn vì chậm tải. Với OPhim, tốc độ tải phim online cực nhanh, giúp bạn có trải nghiệm xem phim liền mạch mà không bị lag, giật.'
      }
    ]
  }

  const topQuality4K = {
    title: 'Chất lượng HD 4K lần đầu tiên có tại Việt Nam',
    desc: 'Nếu bạn muốn trải nghiệm chất lượng điện ảnh tại gia, OPhim chính là lựa chọn lý tưởng. Với hàng loạt phim HD online, thậm chí có cả những bộ phim 4K cực kỳ sắc nét, đây là trang web duy nhất tại Việt Nam mang đến trải nghiệm tuyệt vời này mà không tốn phí.',
    topListData: [
      {
        header: 'Thoải mái lựa chọn thuyết minh và phụ đề đa ngôn ngữ',
        desc: 'OPhim cung cấp đa dạng tùy chọn ngôn ngữ với các bộ phim thuyết minh và phụ đề đa ngôn ngữ. Điều này giúp người xem không chỉ hiểu rõ nội dung mà còn cải thiện khả năng học ngoại ngữ nếu muốn.'
      },
      {
        header: 'Dàn Ekip lồng tiếng chuyên nghiệp, đa vùng miền Bắc – Trung - Nam',
        desc: 'Điều đặc biệt tại OPhim là bạn có thể lựa chọn các phiên bản phim thuyết minh với giọng lồng tiếng phù hợp từ các vùng miền khác nhau tại Việt Nam. Ekip lồng tiếng tại OPhim luôn đảm bảo chất lượng âm thanh sống động, mang đến cảm giác chân thực nhất cho người xem.'
      },
      {
        header: 'Nền tảng xem phim miễn phí không quảng cáo',
        desc: 'Đối với nhiều người dùng, quảng cáo chính là điều phiền toái nhất khi xem phim online miễn phí. Tuy nhiên, OPhim đã loại bỏ hoàn toàn quảng cáo trong quá trình xem phim, giúp bạn tận hưởng từng thước phim mà không bị gián đoạn.'
      },
      {
        header: 'Cập nhật phim liên tục 24/24',
        desc: 'OPhim không ngừng cập nhật các phim mới mỗi ngày, từ các bộ phim bom tấn cho đến những tác phẩm phim truyền hình hấp dẫn. Bạn sẽ không bao giờ bỏ lỡ bất kỳ bộ phim hot nào với dịch vụ phim HD miễn phí trên nền tảng này.'
      }
    ]
  }

  const topFilmFavorite = {
    title: 'Top những thể loại phim được xem nhiều nhất tại – OPhim',
    desc: 'OPhim không chỉ nổi tiếng vì cung cấp phim miễn phí trực tuyến chất lượng cao, mà còn mang đến cho người xem một kho tàng đa dạng thể loại phim. Dưới đây là danh sách những thể loại phim HD miễn phí được yêu thích và xem nhiều nhất trên OPhim:',
    topListData: [
      {
        header: 'Phim Hành động',
        desc: 'Phim hành động luôn đứng đầu danh sách các bộ phim được tìm kiếm nhiều nhất trên OPhim. Với những cảnh quay hoành tráng, đầy kịch tính, dòng phim này mang lại cho khán giả cảm giác mạnh mẽ và cuốn hút. Tại OPhim, bạn có thể thỏa sức xem những siêu phẩm hành động đình đám từ Hollywood như John Wick, Fast & Furious hay các bộ phim hành động châu Á như Ip Man, Thần Bài.'
      },
      {
        header: 'Phim Tình cảm',
        desc: 'Phim tình cảm không bao giờ thiếu sức hút đối với những ai yêu thích những câu chuyện lãng mạn, ngọt ngào hoặc đôi khi là đau khổ đầy cảm xúc. OPhim cung cấp một kho phim tình cảm phong phú từ phim tình cảm Hàn Quốc, phim Thái Lan, phim Trung Quốc, đến những bộ phim tình cảm Việt Nam. Các tựa phim như Hạ Cánh Nơi Anh, Thầm Yêu Quất Sinh Hoài Nam luôn là những cái tên hot thu hút hàng triệu lượt xem.'
      },
      {
        header: 'Phim khoa học viễn tưởng',
        desc: 'Với những câu chuyện giả tưởng, thế giới tương lai đầy sáng tạo, dòng phim khoa học viễn tưởng không chỉ làm mãn nhãn khán giả với kỹ xảo hiện đại mà còn kích thích trí tưởng tượng. OPhim tự hào mang đến những bộ phim đình đám trong thể loại này như Avengers: Infinity War, Interstellar, Star Wars, giúp người xem hòa mình vào các thế giới giả tưởng kỳ thú.'
      },
      {
        header: 'Phim Cổ trang',
        desc: 'Không thể bỏ qua dòng phim cổ trang với các bối cảnh lịch sử và trang phục hoành tráng. OPhim luôn cập nhật những bộ phim cổ trang Trung Quốc, phim cổ trang Việt Nam đầy cuốn hút như Diên Hy Công Lược, Đông Cung, hoặc những bộ phim cổ trang nổi tiếng từ Hàn Quốc như Moon Lovers, Jewel in the Palace. Đây là thể loại thu hút lượng lớn người xem nhờ vào nội dung hấp dẫn và hình ảnh đẹp mắt.'
      },
      {
        header: 'Phim Hoạt hình',
        desc: 'Phim hoạt hình tại OPhim không chỉ dành cho trẻ em mà còn thu hút khán giả ở mọi độ tuổi nhờ vào những câu chuyện sâu sắc và hình ảnh sống động. Bạn có thể tìm thấy những bộ phim đình đám như Frozen, Toy Story, hay các bộ phim anime Nhật Bản nổi tiếng như Demon Slayer, My Hero Academia với phụ đề tiếng Việt hoặc thuyết minh.'
      },
      {
        header: 'Phim Kinh Dị',
        desc: 'Đối với những ai yêu thích cảm giác hồi hộp, phim kinh dị trên OPhim luôn là lựa chọn hoàn hảo. Từ những bộ phim kinh điển như The Conjuring, IT, cho đến những tác phẩm kinh dị châu Á nổi tiếng như The Medium, Ringu, dòng phim này luôn khiến khán giả đứng ngồi không yên nhờ vào các pha dọa dẫm đầy căng thẳng và kịch tính.'
      },
      {
        header: 'Phim Võ thuật',
        desc: 'Phim võ thuật cũng là một trong những thể loại được đông đảo người xem yêu thích tại OPhim. Với những màn đối đầu đầy kịch tính và kỹ thuật điêu luyện, thể loại này mang đến những trải nghiệm tuyệt vời cho fan của các dòng phim hành động. OPhim tự hào mang đến những bộ phim võ thuật từ Trung Quốc và Hồng Kông như Ngọa Hổ Tàng Long, Thập Diện Mai Phục, và phim võ thuật đỉnh cao như Sát Phá Lang, Vịnh Xuân Quyền.'
      },
      {
        header: 'Phim Tâm lý',
        desc: 'Đối với những ai muốn tìm hiểu sâu về tâm lý nhân vật và những mối quan hệ phức tạp, phim tâm lý là lựa chọn lý tưởng. Những bộ phim như Parasite, Marriage Story, hay các phim tâm lý đỉnh cao từ nhiều quốc gia khác nhau luôn có mặt trên OPhim với chất lượng HD sắc nét, thuyết minh và phụ đề đa ngôn ngữ, giúp bạn thưởng thức những tác phẩm tâm lý giàu cảm xúc.'
      }
    ]
  }

  const topBestSingleMovies = {
    title: 'Top Phim lẻ hay nhất mọi thời đại',
    desc: 'OPhim không chỉ cung cấp kho phim phong phú và đa dạng, mà còn giúp người xem dễ dàng tiếp cận với những phim lẻ đình đám đã làm mưa làm gió trong lịch sử điện ảnh. Dưới đây là danh sách top phim lẻ hay nhất mọi thời đại mà bạn không thể bỏ lỡ khi truy cập OPhim – trang web phim miễn phí chất lượng cao.',
    topListData: [
      {
        header: '1. The Shawshank Redemption – Nhà tù Shawshank',
        desc: 'Được xếp vào danh sách những bộ phim hay nhất mọi thời đại, The Shawshank Redemption là một kiệt tác kinh điển về tình bạn và sự kiên cường của con người. Bộ phim kể về cuộc sống của Andy Dufresne trong nhà tù Shawshank, nơi anh cố gắng giữ vững niềm tin và tìm cách thoát khỏi những bất công. Với nội dung sâu sắc và những thông điệp về cuộc sống, đây là một bộ phim đáng xem trên OPhim.'
      },
      {
        header: '2. Forrest Gump – Cuộc đời Forrest Gump',
        desc: 'Forrest Gump là một bộ phim lẻ kinh điển, đầy xúc cảm về cuộc đời của một người đàn ông với trí thông minh dưới mức trung bình nhưng có một trái tim vĩ đại. Bộ phim đưa người xem qua các biến cố lịch sử và xã hội của nước Mỹ qua lăng kính giản dị nhưng sâu sắc của Forrest. OPhim luôn có sẵn phim HD miễn phí này cho những ai yêu thích dòng phim tâm lý.'
      },
      {
        header: '3. Titanic – Con tàu huyền thoại',
        desc: 'Chắc chắn không thể bỏ qua Titanic, một siêu phẩm điện ảnh tình cảm lãng mạn xen lẫn bi kịch lịch sử. Titanic không chỉ là câu chuyện tình yêu đẹp giữa Jack và Rose, mà còn là minh chứng cho khả năng dàn dựng và kể chuyện tuyệt vời. Với chất lượng phim HD trên OPhim, bạn sẽ được trải nghiệm từng khung cảnh hoành tráng của bộ phim.'
      },
      {
        header: '4. The Godfather – Bố già',
        desc: 'The Godfather là một tượng đài trong dòng phim hành động và phim tội phạm. Bộ phim xoay quanh câu chuyện về gia đình mafia Corleone và những xung đột trong giới tội phạm. Với dàn diễn viên xuất sắc và kịch bản hấp dẫn, The Godfather xứng đáng là một trong những phim lẻ hay nhất mọi thời đại mà bạn có thể thưởng thức tại OPhim.'
      },
      {
        header: '5. Inception – Kẻ đánh cắp giấc mơ',
        desc: 'Inception là một trong những bộ phim khoa học viễn tưởng nổi tiếng nhất của đạo diễn Christopher Nolan. Với cốt truyện đầy sáng tạo về những giấc mơ trong giấc mơ, bộ phim đã cuốn hút hàng triệu khán giả toàn cầu. Đặc biệt, chất lượng HD 4K trên OPhim sẽ giúp bạn thưởng thức những pha hành động và kỹ xảo đỉnh cao của siêu phẩm này.'
      },
      {
        header: '6. Parasite – Ký sinh trùng',
        desc: 'Là bộ phim Hàn Quốc đầu tiên giành giải Oscar cho phim hay nhất, Parasite mang đến câu chuyện đen tối về sự phân tầng xã hội. Với kịch bản tinh tế và những pha "twist" đầy bất ngờ, bộ phim đã gây sốt trên toàn thế giới. Trên OPhim, bạn có thể dễ dàng xem lại bộ phim này với phụ đề tiếng Việt hoặc thuyết minh.'
      },
      {
        header: '7. The Dark Knight – Kỵ sĩ bóng đêm',
        desc: 'Bộ phim về người hùng Batman này là một trong những phim hành động siêu anh hùng hay nhất từng được sản xuất. Với màn trình diễn tuyệt vời của Heath Ledger trong vai Joker, The Dark Knight không chỉ đơn thuần là một bộ phim giải trí mà còn mang những thông điệp sâu sắc về công lý và cái ác. OPhim luôn cập nhật những bộ phim bom tấn như The Dark Knight để phục vụ nhu cầu giải trí của bạn.'
      }
    ]
  }

  const whyChooseOPhim = {
    title: 'Tại sao nên chọn OPhim – Kênh xem phim miễn phí hàng đầu Việt Nam',
    desc: 'Giữa hàng loạt trang web phim miễn phí hiện nay, OPhim vẫn giữ vững vị thế là một trong những nền tảng xem phim HD online đáng tin cậy và được yêu thích nhất. Vậy tại sao bạn nên chọn OPhim?',
    topListData: [
      {
        header: '1. Kho phim khổng lồ và đa dạng',
        desc: 'OPhim sở hữu một kho phim online miễn phí cực kỳ phong phú với đủ mọi thể loại từ phim hành động, phim tâm lý tình cảm cho đến phim khoa học viễn tưởng, phim cổ trang, và phim hoạt hình. Dù bạn yêu thích dòng phim nào, OPhim đều đáp ứng đầy đủ nhu cầu giải trí của bạn.'
      },
      {
        header: '2. Chất lượng phim HD, 4K sắc nét',
        desc: 'Tại OPhim, khán giả có thể thưởng thức các bộ phim HD miễn phí với chất lượng hình ảnh sắc nét, sống động. Đặc biệt, những bộ phim 4K sẽ mang đến trải nghiệm tuyệt vời, không khác gì rạp chiếu phim tại nhà.'
      },
      {
        header: '3. Xem phim hoàn toàn miễn phí',
        desc: 'Không cần phải lo lắng về chi phí, vì OPhim cung cấp dịch vụ xem phim trực tuyến miễn phí mà không yêu cầu đăng ký hoặc trả phí. Bạn có thể xem tất cả các bộ phim hot, từ phim lẻ đến phim dài tập, mà không mất bất kỳ khoản phí nào.'
      },
      {
        header: '4. Không quảng cáo làm phiền',
        desc: 'Một trong những điểm nổi bật khiến OPhim được yêu thích chính là trải nghiệm xem phim không quảng cáo. Bạn sẽ không bị gián đoạn bởi những đoạn quảng cáo phiền toái, từ đó tận hưởng trọn vẹn từng phút giây giải trí.'
      },
      {
        header: '5. Tốc độ tải phim nhanh chóng',
        desc: 'Với hệ thống máy chủ hiện đại, OPhim đảm bảo tốc độ tải phim online nhanh chóng và mượt mà, không bị gián đoạn bởi tình trạng chậm hay lag. Điều này giúp bạn thưởng thức phim liên tục, không mất thời gian chờ đợi.'
      }
    ]
  }

  const newFeedAndBlock = {
    title: 'Xem tin tức phim ảnh & showbiz mới nhất tại Blog OPhim',
    desc: 'Ngoài việc mang đến trải nghiệm xem phim online đỉnh cao, OPhim còn mang đến cho khán giả một chuyên trang tin tức riêng - OPhim.blog. Tại đây, bạn có thể cập nhật nhanh chóng những tin tức nóng hổi về phim chiếu rạp, review phim, lịch chiếu mới, cũng như những câu chuyện hậu trường thú vị trong làng showbiz Việt - Hàn - Hoa. Nếu bạn là tín đồ yêu phim, chắc chắn OPhim.blog sẽ là điểm đến giải trí không thể bỏ qua.',
    topListData: []
  }

  const realDomainOPhim = {
    title: 'Trang cung cấp tên miền chính thức của OPhim - OPhim.org',
    desc: 'Để đảm bảo người dùng luôn truy cập đúng vào website chính thống, https://OPhim.org là một kênh cập nhật tên miền mới nhất, tên miền hiện tại của Rổ Phim. Nhờ đó, bạn luôn có thể tìm được đường dẫn chính xác đến trang web xem phim miễn phí OPhim, tránh các website giả mạo kém chất lượng.',
    topListData: []
  }

  const conclusion = {
    desc: `OPhim không chỉ là một trang xem phim online miễn phí mà còn là một cộng đồng giải trí trực tuyến chất lượng cao. Với các tính năng vượt trội như phim HD, phim 4K, phim thuyết minh, và phụ đề đa ngôn ngữ, OPhim thực sự đã định nghĩa lại cách chúng ta trải nghiệm điện ảnh tại nhà. Nếu bạn đang tìm kiếm một web xem phim miễn phí, đầy đủ thể loại, không quảng cáo và liên tục cập nhật các bộ phim hot, thì OPhim chính là lựa chọn không thể bỏ qua.`,
    desc2: `Đừng quên truy cập OPhim ngay hôm nay để trải nghiệm những bộ phim lẻ hay, phim chiếu rạp, và các siêu phẩm từ mọi nơi trên thế giới mà hoàn toàn miễn phí!`,
    title: 'Lời Kết',
    topListData: []
  }

  return (
    <div className='flex justify-center items-center text-[#cfcfcf]'>
      <div className='container px-24'>
        <div className='home-about_intro'>
          <p className='mb-4 leading-[1.7] text-[16px]'>
            Trong kỷ nguyên số ngày nay, việc <b>xem phim miễn phí trực tuyến</b> đã trở thành nhu cầu giải trí không
            thể thiếu. Với sự bùng nổ của các nền tảng phát trực tuyến phim, OPhim nổi bật lên như một trang web xem
            phim miễn phí uy tín, mang đến cho khán giả hàng loạt tác phẩm điện ảnh chất lượng cao từ mọi thể loại. Hãy
            cùng khám phá những điểm độc đáo khiến <b>OPhim</b> trở thành lựa chọn hàng đầu cho những ai yêu thích phim
            online!
          </p>
          <p className='text-[26px] text-[#FFD875] my-6 font-semibold'>
            Giới thiệu về OPhim – Phim hay cả ổ - Nền tảng xem online miễn phí mới 2025
          </p>
          <p className='leading-[1.7] text-[16px]'>
            <b>OPhim</b>, một nền tảng xem phim trực tuyến hoàn toàn miễn phí, đã không ngừng phát triển để đáp ứng nhu
            cầu giải trí của hàng triệu người dùng. Với giao diện dễ sử dụng và kho phim phong phú, <b>OPhim</b> không
            chỉ thu hút người dùng nhờ vào việc <b>xem phim miễn phí trực tuyến</b>, mà còn nhờ vào chất lượng video
            đỉnh cao. Từ phim HD đến 4K, tất cả đều có tại đây, giúp bạn tận hưởng từng khoảnh khắc giải trí tuyệt vời.
          </p>
        </div>
        <div className='home-about_achieve'>
          <div className='my-10'>
            <h3 className='text-[22px] text-white mb-[20px]'>
              Trang web xem phim chất lượng HD 4K duy nhất tại Việt Nam
            </h3>
            <p className='leading-[1.7] text-[16px]'>
              <b>OPhim</b> không chỉ dừng lại ở việc mang đến những bộ phim miễn phí. Một trong những lý do trang web
              này trở thành lựa chọn hàng đầu là nhờ vào chất lượng hình ảnh vượt trội, đặc biệt là những bộ
              <b>phim HD</b> và <b>phim 4K</b>. Điều này giúp người dùng cảm nhận được mọi chi tiết trong từng khung
              hình với độ sắc nét cao, không khác gì trải nghiệm rạp chiếu phim tại gia.
            </p>
          </div>
          <div className='my-10'>
            <h3 className='text-[22px] text-white mb-[20px]'>Điểm nổi bật của OPhim</h3>
            <p className='leading-[1.7] text-[16px] mb-4'>
              <b>OPhim</b> có nhiều đặc điểm nổi bật mà không phải trang web nào cũng có thể cung cấp. Hãy điểm qua một
              vài yếu tố đã giúp <b>OPhim</b> vươn lên trở thành trang web xem phim miễn phí hàng đầu tại Việt Nam:
            </p>
            <ul className='list-disc pl-8 space-y-2'>
              <li>Kho phim đa dạng: Từ phim lẻ, phim dài tập đến các bộ phim mới chiếu rạp.</li>
              <li>Chất lượng phim vượt trội: Phim với độ phân giải từ HD đến 4K.</li>
              <li>Phụ đề và thuyết minh đa ngôn ngữ: Thích hợp cho mọi đối tượng khán giả.</li>
              <li>Tốc độ tải nhanh, mượt mà: Giúp trải nghiệm xem phim không bị gián đoạn.</li>
            </ul>
          </div>
        </div>
        <HomeTopDesc data={topNewFeatures} />
        <HomeTopDesc data={topQuality4K} />
        <HomeTopDesc data={topFilmFavorite} />
        <HomeTopDesc data={topBestSingleMovies} />
        <HomeTopDesc data={whyChooseOPhim} />
        <HomeTopDesc data={newFeedAndBlock} />
        <HomeTopDesc data={realDomainOPhim} />
        <HomeTopDesc data={conclusion} />
      </div>
    </div>
  )
}
