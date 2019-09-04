import * as constants from './actionTypes';


const defaultState = {
  homeData: [
    {
      id: '1',
      title: '鲜有人知的诗!',
      time: '2019/8/22',
      category: '情感',
      content: '昨天看到“何以道殷勤？约纸一双银。”这句诗，瞬间就被浪漫到了，我就去百度了一下全诗： 我出东门游，邂逅承清尘。思君即幽房，侍寝执衣巾。时无桑中契，迫此路侧人。我既媚君姿，君亦悦我颜。何以致拳拳？绾臂双金环.何以道殷勤？约指一双银.何以致区区？耳中双明珠.何以致叩叩？香囊系肘后。何以致契阔？绕腕双跳脱。何以结恩情？美玉缀罗缨。何以结中心？素缕连双针。何以结相于？金薄画搔头。何以慰别离？耳后玳瑁钗。何以答欢忻？纨素三条裙。何以结愁悲？白绢双中衣与我期何所？乃期东山隅日旰兮不来，谷风吹我襦。远望无所见，涕泣起踟蹰。与我期何所？乃期山南阳日中兮不来，飘风吹我裳。逍遥莫谁睹，望君愁我肠。与我期何所？乃期西山侧日夕兮不来，踯躅长叹息。远望凉风至，俯仰正衣服。与我期何所？乃期山北岑日暮兮不来，凄风吹我襟。望君不能坐，悲苦愁我心。爱身以何为，惜我华色时。中情既款款，然后克密期。褰衣蹑茂草，谓君不我欺。厕此丑陋质，徙倚无所之。自伤失所欲，泪下如连丝。 这首诗是繁钦写的，三国时期大才子繁钦文辞俏丽，意气昂扬，是曹操颇为喜爱的主薄，他仅存的长诗《定情诗》以铺彩摛文的手法、热情奔放的词句千古流传，惊艳后世。诗中的连续对答，展现了古代男女守护爱情、见证誓言的十大定情信物。 1、何以致拳拳？绾臂双金环 "绾臂双金环"指臂钏，又称缠臂金，这是我国古代女性一种缠绕于臂的装饰，用金银带条盘绕成螺旋圈状，所盘圈数多少不等,一般三至八圈,也有多到十二三圈的。缠臂金的奥妙在于戴上之后无论从什么角度看,所见都为数道圆环,而相互不关联，宛如佩戴着几个手镯般美丽。早期臂钏实物多出现于北方地区，通常将金银条锤扁，并有花、素之分：镂刻有花纹的，称"花钏"，素而无纹的，称"素钏"。 2、何以道殷勤？约指一双银 以戒指作为定情物，无论在东方还是西方都颇为通用，不过在古代中国用戒指定情的习俗虽由来已久，但此戒指只作为定情物，并不在婚礼上出现。据悉，戒指原本起源于古代宫廷，女性戴戒指是用以记事。戒指是一种"禁戒"、"戒止"的标志。当时皇帝三宫六院、七十二嫔妃，在后宫被皇上看上者，宦官就记下她陪伴君王的日期，并在她右手上戴一枚银戒指作为记号。当后妃妊娠，告知宦官，就给戴一枚金戒指在左手上，以示戒身。由于嫔妃都将戴上戒指视为荣耀，这种习俗便流传开来，到了东汉时期民间已经非常普遍。 3、何以致区区？耳中双明珠 耳中明珠指的是耳饰，一簪一珥，可伴一生，耳饰在古人审美观念中有很重要的地位。唐代张籍《节妇吟》"还君明珠双泪垂，恨不相逢未嫁时"，所说的"明珠"指代的就是耳环，也透露了耳环的确作为定情物在唐代出现，接受与否便成就了悲欢离合。不过耳环在唐代并不流行，唐代妇女几乎都不戴耳坠。唐代以前，耳饰只在少数民族中存在。宋代妇女喜戴耳环,不喜戴耳坠。明清时期是耳饰发展形制最为鼎盛的时期，明代耳环大多以金银横压出花形，然后在花瓣或花叶部位镶嵌各种宝石，有的还在花蕊中间镶嵌上一颗珍珠，这便是诗中所谓的"明珠"了。 4、何以致叩叩？香囊系肘后 香囊的历史由来已久。古时又称香包、香缨、香袋、香球、佩伟、荷包等等，因为香囊是随身之物，恋人之间也常常把它当做礼物相互赠送，以表衷情。香囊一般系于腰间或肘后之下的腰带上，也有的系于床帐或车辇上。由于奇特香料多来自外国的贡品，朝廷还把香囊作为赏赐之物。制作各式香囊，曾是古代人们生活中最为平常的事。尤其是在文化繁盛的中原，香囊是生活用品之一，却也正因人之必需，而逐渐演绎成世人表情达意的一个道具，从而具有了丰富而含蓄的内涵。 5、何以致契阔？绕腕双跳脱 跳脱即为手镯、腕钏，古人将腕间风流称之为"跳脱"的确别具一格。古代文学作品中，常有女子钟情男子后以腕间手镯相赠的情节，而古典诗词名句中，也一直有关于手镯的唯美意象。"浓淡神会风前影，跳脱秋生腕底香"，描写的虽然是"秋生"菊花，却有"跳脱"萦绕其间，颇见不凡性情；"越女采莲秋水畔，窄袖轻罗，暗露双金钏"，野性美一览无遗。 6、何以结恩情？美玉缀罗缨 "罗缨"是古代女子出嫁时系于腰间的彩色丝带，以示人有所属，而彩色丝带上佩戴美玉，更是一件定情佳品，这是因为玉在古典文化中拥有非同凡响的意义。古时富贵人家、上流社会、书香门第的人，都会佩戴玉佩，这已经成为身份、地位的一种象征。古代婚姻是父母之命、媒妁之言，所以在定亲的时候，双方父母往往会交换玉佩作为信物，让有婚约的孩子时刻佩戴。古人有言："玉之美，有如君子之德。"玉佩象征着君子，有着恭敬平和、温润悠远之意，所以古代君子们喜欢用玉佩来作为定情物，显得节制有礼。 7、何以结中心？素缕连双针 同心结也一直是古人表达情感的信物，所谓"著以长相思，缘以结不解"，将那丝丝缕缕的锦带编成连环回文式的同心结来赠与对方，绵绵思恋与万千情愫也都蕴含其中。正古时初婚的夫妇,在新婚之夜饮交杯酒前会各剪下一绺头发,绾在一起表示同心。"结发夫妻"的典故正源于此。把自己和恋人的一束头发合在一起编成一只同心结,表达了欲与恋人百年结发的美好愿望。比较有意思的是同心结与"结梁子"也有所渊源，现在指的"结梁子"就是过节，阻碍，矛盾，隔阂，但"梁子"的另外一个意思是梁家子，讲的是梁山伯与祝英台的故事。 8、何以结相于？金薄画搔头 搔头是簪的别称。相传颇得汉武帝宠爱的李夫人，便是以玉簪搔头的风姿迷倒武帝，而宫人竞相以簪搔头，搔头的称呼就此流传下来。簪钗作为定情物，是古代最常见的，只因男女相会，唯有此物最解风情。 9、何以慰别离？耳后玳瑁钗 簪钗虽同为发饰，不过钗显然比簪更加复杂，簪在古时为男女皆用，而钗只为女性使用，钗为珠翠和金银合制成花朵或其他造型的发钿，连缀着固定发髻的双股或多股长针，使用时安插在双鬓。钗不仅是一种饰物，它还是一种寄情的表物。古代恋人或夫妻之间有一种赠别的习俗：女子将头上的钗一分为二，一半赠给对方，一半自留，待到他日重见再合在一起。 10、纨素三条裙，白绢双中衣 无论是"三条裙"或是"双中衣"，指代的都是古代妇女的服饰，而白绢和纨素则是服饰的材质，这些作为定情信物的衣服显然不是粗布葛衣。中国古代女性在服饰上更加喜欢创造一种含而不露的美，这种创造具有极大的装饰性、整体性和轻柔飘逸的美学效果。其独特的格调和风韵,代表着东方女性所特有的审美理想。',
      comments: [
        {
          userName: '王海涛',
          comment: '人类真可爱，问我晚上不睡觉都在干嘛，我还能干嘛，当然是想着怎么联系外星人炸地球。'
        },
        {
          userName: '李白',
          comment: '云想衣裳花想容，春风拂槛露华浓。莫非群玉山头见，会向瑶台月下逢。'
        },
        {
          userName: '杜甫',
          comment: '锦江春色来天地，玉垒浮云变古今。'
        }
      ] 
    },
    {
      id: '2',
      title: '经常打扰你的人，一定是爱你的人',
      time: '2019/8/22',
      category: '情感',
      content: '想看一个人是不是真的喜欢你，就观察他会不会主动找你。如果每天都找你，有话没话都聊几句，哪怕看起来平常，其实心里爱煞你了！一个人是不是真的喜欢你，就看他会不会主动找你。真正爱你的人，一定会主动去找你，会主动联系你，让你真的他对你的关心。爱一个人是耐不住的，是掩饰不了的，是无法自控的，是情不自禁的。再内向的人，面对心仪的人，也会变得主动，也会变得善言，也会忍不住来找你聊天。再自卑的人，有了喜欢的人，也会鼓起勇气去接近，也会暗地里照镜子，也会刻意把自己装扮得得体，只为在喜欢的人面前留下好印象。主动对你好的人，一定是关心你的人；主动了解你的人，一定是在意你的人；主动进入你生活的人，一定是对你有好感的人；主动不离不弃的人，一定是喜欢你的人。想要知道一个人是不是喜欢你，就看他是不是每次都能主动来找你，是不是你对他冷淡他还一如既往地放下面子出现在你面前，是不是只要你一找他，他就开心不已，是不是你跟他聊天，他就聊个没完。爱你的人，是一定会主动来找你的。在乎，才会主动一个人突然变得主动，是因为在乎。如果不在乎，谁会丢下面子主动去讨好一个无关的人；如果不是在乎，谁会一直去打扰一个不冷不热的人；如果不是在乎，谁会厚着脸皮一而再再而三去打扰。总是花时间陪你的人，不是因为他时间多，也不是因为他无聊觉得好玩，而是他真的爱你。总是来打扰你的人，不是他有多无聊，不是他本意想来打扰，而是爱情让他不得不主动来找你，而是情不自禁想要跟你联系。如果不是因为在乎，他为何你的每一条信息都要秒回；为何你每一次伤心他都及时安慰；为何每次找他，他都有时间；为何随便聊什么话题，他都能和你聊得起劲；为何每一次你跟他分享东西，他都能开心的听；为何他经常看到什么，想到什么都要说给你听。傻瓜，还不是因为他在意你！珍惜那些老是主动找你的笨蛋；珍惜那些老是秒回你的傻瓜；珍惜那些不厌其烦打扰你的人；珍惜那些有时候事都第一时间想起你的人；珍惜那些有事没事给你发信息关心你的人；珍惜那些每天跟你说早安晚安的人；珍惜那些你无论冷落了他多久，他还是掩藏失落来找你的人。因为他，不是对所有人都那么主动!'
    },
    {
      id: '3',
      title: '你在 19 年剩余的时间里还能学点什么？',
      time: '2019/8/22',
      category: '情感',
      content: '对方把你作为她整个的世界固然很危险，但也很宝贵！你既已发觉，一定会慢慢点醒她：最好旁敲侧击而勿正面提出，还要使她感到那是为了维护她的人格独立，扩大她的世界观。倘若你已经想到奥里维的故事，不妨就把那部书叫她细读一二遍，特别要她注意那一段插曲。像雅葛丽纳那样只知道love," "love," love的人只是童话中任务，在现实世界非但得不到love，连日子都会过不下去，因为她除了love一无所知，一无所有，一无所爱。这样狭窄 的天地哪像一个天地！这样片面的人生观哪会得到幸福！无论男女，只有把兴趣集中在事业 上，学问上，艺术上，尽量抛开渺小的自我，才有快活的可能，才觉得活得有意义。未经世事的少女往往会存一个荒诞的梦想，以为恋爱时期的感情的高潮也能在婚后维持 下去。这是违反自然规律的妄想。古语说，“君子之交谈如水”；又有一句话说，“夫妇相 敬如宾”。可见只有平静、含蓄、温和的感情方能持久，另外一句的意义是说，夫妇到后来 完全是一种知己朋友的关系，也即是我们所谓的终身伴侣。未婚之前双方能深切领会到这一 点。就为将来打定了最可靠的基础，免除了多少不必要的误会和痛苦。'
    },
    {
      id: '4',
      title: '今岁应开墨色花~',
      time: '2019/8/22',
      category: '情感',
      content: '对方把你作为她整个的世界固然很危险，但也很宝贵！你既已发觉，一定会慢慢点醒她：最好旁敲侧击而勿正面提出，还要使她感到那是为了维护她的人格独立，扩大她的世界观。倘若你已经想到奥里维的故事，不妨就把那部书叫她细读一二遍，特别要她注意那一段插曲。像雅葛丽纳那样只知道love," "love," love的人只是童话中任务，在现实世界非但得不到love，连日子都会过不下去，因为她除了love一无所知，一无所有，一无所爱。这样狭窄 的天地哪像一个天地！这样片面的人生观哪会得到幸福！无论男女，只有把兴趣集中在事业 上，学问上，艺术上，尽量抛开渺小的自我，才有快活的可能，才觉得活得有意义。未经世事的少女往往会存一个荒诞的梦想，以为恋爱时期的感情的高潮也能在婚后维持 下去。这是违反自然规律的妄想。古语说，“君子之交谈如水”；又有一句话说，“夫妇相 敬如宾”。可见只有平静、含蓄、温和的感情方能持久，另外一句的意义是说，夫妇到后来 完全是一种知己朋友的关系，也即是我们所谓的终身伴侣。未婚之前双方能深切领会到这一 点。就为将来打定了最可靠的基础，免除了多少不必要的误会和痛苦。'
    }
  ],
  categoryData: [
    {
      category: 'JS',
      count: '8'
    },
    {
      category: 'React',
      count: '5'
    },
    {
      category: '数据结构和算法',
      count: '3'
    },
    {
      category: '其他',
      count: '6'
    },
  ],
  tagData: [
    {
      tag: 'JS',
      count: '15'
    },
    {
      tag: 'React',
      count: '20'
    },
    {
      tag: '算法',
      count: '27'
    },
    {
      tag: 'ES6',
      count: '24'
    },
    {
      tag: 'TS',
      count: '16'
    },
    {
      tag: 'Vue',
      count: '26'
    },
    {
      tag: 'Flutter',
      count: '22'
    },
    {
      tag: '其他',
      count: '18'
    },
  ],
  detailData: {
    title: 'JS',
    count: '8',
    content: [
      {
        id: '1',
        article: '你不知道的JS',
        time: '8/16'
      },
      {
        id: '2',
        article: '前端代码规范 — JavaScript 风格指南',
        time: '8/18'
      },
      {
        id: '3',
        article: '深入 JavaScript 设计模式，从此有了优化代码的理论依据',
        time: '8/18'
      },
      {
        id: '4',  
        article: '写给前端工程师的Flutter教程',
        time: '8/16'
      },
      {
        id: '5',  
        article: '如何理解Virtual DOM？',
        time: '8/18'
      },
      {
        id: '6',
        article: 'JS基础-函数、对象和原型、原型链的关系',
        time: '8/18'
      },
      {
        id: '7',
        article: '基于 HTML5 Canvas 的拓扑组件开发',
        time: '8/18'
      },
      {
        id: '8',
        article: 'JavaScript中的位操作符',
        time: '8/18'
      },
    ]
  },
  comments: {}
}

export default (state = defaultState, action) => {
  if(action.type === constants.INIT_HOME_DATA) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.homeData = state.homeData
    return newState
  }

  if(action.type === constants.CATEGORY_DATA) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.categoryData = state.categoryData
    return newState
  }

  if(action.type === constants.TAG_DATA) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.tagData = state.tagData
    return newState
  }

  if(action.type === constants.COMMENT_DATA) {
    console.log(action.payload)
    const comments = action.payload
    const newState = JSON.parse(JSON.stringify(state))
    newState.comments = action.payload
    console.log(newState)
    
    return newState
  }

  return state
}