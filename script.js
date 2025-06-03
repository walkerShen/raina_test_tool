// 导航功能
document.addEventListener('DOMContentLoaded', function() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const toolPanels = document.querySelectorAll('.tool-panel');
    
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const toolName = this.getAttribute('data-tool');
            
            // 移除所有活动状态
            navBtns.forEach(b => b.classList.remove('active'));
            toolPanels.forEach(p => p.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            document.getElementById(toolName + '-panel').classList.add('active');
        });
    });
    
    // 二级导航切换逻辑
    const subNavBtns = document.querySelectorAll('.sub-nav-btn');
    const generatorContents = document.querySelectorAll('.generator-content');
    
    subNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const generatorName = this.getAttribute('data-generator');
            
            // 移除所有二级导航活动状态
            subNavBtns.forEach(b => b.classList.remove('active'));
            generatorContents.forEach(c => c.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            document.getElementById(generatorName + '-generator').classList.add('active');
        });
    });
    
    // 设置当前时间到日期输入框
    const now = new Date();
    const dateInput = document.getElementById('date-input');
    if (dateInput) {
        dateInput.value = now.toISOString().slice(0, 16);
    }
});

// 随机内容生成
function generateRandomText() {
    const length = parseInt(document.getElementById('text-length').value);
    const language = document.getElementById('text-language').value;
    const type = document.getElementById('text-type').value;
    const result = document.getElementById('randomtext-result');
    
    let generatedText = '';
    
    // 不同语言的基础词汇库
    const vocabularies = {
        chinese: {
            lorem: ['这是', '一个', '随机', '生成', '的', '中文', '文本', '内容', '用于', '测试', '和', '演示', '目的', '请', '根据', '实际', '需要', '进行', '调整', '修改'],
            article: ['在', '现代', '社会', '中', '科技', '发展', '日新月异', '人们', '生活', '水平', '不断', '提高', '教育', '医疗', '交通', '等', '各个', '领域', '都', '取得了', '显著', '进步'],
            story: ['从前', '有', '一个', '美丽', '的', '村庄', '那里', '住着', '善良', '的', '人们', '每天', '日出', '而作', '日落', '而息', '过着', '平静', '幸福', '的', '生活'],
            technical: ['系统', '架构', '设计', '需要', '考虑', '性能', '安全性', '可扩展性', '数据库', '优化', '缓存', '策略', '负载', '均衡', '微服务', '容器化', '部署'],
            business: ['公司', '业务', '发展', '战略', '市场', '分析', '客户', '需求', '产品', '服务', '质量', '管理', '团队', '合作', '创新', '竞争', '优势'],
            casual: ['今天', '天气', '不错', '我们', '一起', '去', '公园', '散步', '吧', '听说', '那里', '新开', '了', '一家', '咖啡店', '环境', '很好', '值得', '一试']
        },
        english: {
            lorem: ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua'],
            article: ['The', 'modern', 'world', 'is', 'constantly', 'evolving', 'with', 'technology', 'playing', 'a', 'crucial', 'role', 'in', 'shaping', 'our', 'daily', 'lives', 'and', 'future', 'prospects'],
            story: ['Once', 'upon', 'a', 'time', 'in', 'a', 'distant', 'land', 'there', 'lived', 'a', 'brave', 'knight', 'who', 'embarked', 'on', 'an', 'epic', 'adventure', 'to', 'save', 'the', 'kingdom'],
            technical: ['System', 'architecture', 'design', 'requires', 'careful', 'consideration', 'of', 'performance', 'security', 'scalability', 'database', 'optimization', 'caching', 'strategies', 'load', 'balancing'],
            business: ['Business', 'development', 'strategy', 'market', 'analysis', 'customer', 'requirements', 'product', 'service', 'quality', 'management', 'team', 'collaboration', 'innovation', 'competitive', 'advantage'],
            casual: ['Hey', 'how', 'are', 'you', 'doing', 'today', 'the', 'weather', 'is', 'really', 'nice', 'would', 'you', 'like', 'to', 'grab', 'some', 'coffee', 'later']
        },
        japanese: {
            lorem: ['これは', 'ランダム', 'に', '生成', 'された', '日本語', 'の', 'テキスト', 'です', 'テスト', 'や', 'デモ', 'の', '目的', 'で', '使用', 'されます'],
            article: ['現代', '社会', 'において', '技術', 'の', '発展', 'は', '目覚ましく', '私たち', 'の', '生活', 'を', '大きく', '変化', 'させて', 'います'],
            story: ['昔々', 'ある', '美しい', '村', 'に', '優しい', '人々', 'が', '住んで', 'いました', '彼ら', 'は', '平和', 'で', '幸せ', 'な', '生活', 'を', '送って', 'いました'],
            technical: ['システム', 'アーキテクチャ', '設計', 'には', 'パフォーマンス', 'セキュリティ', 'スケーラビリティ', 'を', '考慮', 'する', '必要', 'があります'],
            business: ['ビジネス', '戦略', '市場', '分析', '顧客', 'ニーズ', '製品', 'サービス', '品質', '管理', 'チーム', '協力', 'イノベーション'],
            casual: ['今日', 'は', '天気', 'が', 'いい', 'ですね', '一緒', 'に', '公園', 'を', '散歩', 'しませんか', 'コーヒー', 'でも', '飲み', 'ましょう']
        }
    };
    
    // 获取对应语言和类型的词汇
    let words = vocabularies[language] ? vocabularies[language][type] : vocabularies.english.lorem;
    if (!words) {
        words = vocabularies.english.lorem;
    }
    
    // 生成指定长度的文本
    let currentLength = 0;
    const sentences = [];
    
    while (currentLength < length) {
        const sentenceLength = Math.floor(Math.random() * 15) + 5; // 5-20个词的句子
        const sentence = [];
        
        for (let i = 0; i < sentenceLength && currentLength < length; i++) {
            const word = words[Math.floor(Math.random() * words.length)];
            sentence.push(word);
            currentLength += word.length + 1; // +1 for space
        }
        
        if (sentence.length > 0) {
            let sentenceText = sentence.join(language === 'chinese' || language === 'japanese' ? '' : ' ');
            if (language === 'english') {
                sentenceText = sentenceText.charAt(0).toUpperCase() + sentenceText.slice(1);
            }
            sentences.push(sentenceText + (language === 'chinese' || language === 'japanese' ? '。' : '.'));
        }
    }
    
    generatedText = sentences.join(language === 'chinese' || language === 'japanese' ? '' : ' ');
    
    // 截取到指定长度
    if (generatedText.length > length) {
        generatedText = generatedText.substring(0, length);
        // 确保不在单词中间截断（对于英文）
        if (language === 'english' && generatedText.lastIndexOf(' ') > generatedText.length - 10) {
            generatedText = generatedText.substring(0, generatedText.lastIndexOf(' '));
        }
    }
    
    result.value = generatedText;
}

// 随机邮箱生成
function generateEmails() {
    const count = parseInt(document.getElementById('email-count').value);
    const domain = document.getElementById('email-domain').value;
    const result = document.getElementById('email-result');
    
    const emails = [];
    const prefixes = ['user', 'test', 'demo', 'sample', 'admin', 'info', 'contact', 'support'];
    
    for (let i = 0; i < count; i++) {
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const randomNum = Math.floor(Math.random() * 10000);
        const email = `${prefix}${randomNum}@${domain}`;
        emails.push(email);
    }
    
    result.value = emails.join('\n');
}

// 电话号码生成
function generatePhones() {
    const count = parseInt(document.getElementById('phone-count').value);
    const type = document.getElementById('phone-type').value;
    const result = document.getElementById('phone-result');
    
    const phones = [];
    
    for (let i = 0; i < count; i++) {
        let phone;
        if (type === 'mobile') {
            // 生成手机号码（中国）
            const prefixes = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139',
                            '150', '151', '152', '153', '155', '156', '157', '158', '159',
                            '180', '181', '182', '183', '184', '185', '186', '187', '188', '189'];
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            const suffix = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
            phone = prefix + suffix;
        } else {
            // 生成固定电话
            const areaCode = Math.floor(Math.random() * 900 + 100);
            const number = Math.floor(Math.random() * 10000000).toString().padStart(7, '0');
            phone = `0${areaCode}-${number}`;
        }
        phones.push(phone);
    }
    
    result.value = phones.join('\n');
}

// 随机地址生成
function generateAddresses() {
    const count = parseInt(document.getElementById('address-count').value);
    const type = document.getElementById('address-type').value;
    const result = document.getElementById('address-result');
    
    const provinces = ['北京市', '上海市', '广东省', '浙江省', '江苏省', '山东省', '河南省', '四川省', '湖北省', '湖南省'];
    const cities = ['朝阳区', '海淀区', '西城区', '东城区', '丰台区', '石景山区', '通州区', '昌平区', '大兴区', '房山区'];
    const streets = ['中山路', '人民路', '解放路', '建设路', '新华路', '光明路', '胜利路', '和平路', '友谊路', '文化路'];
    const buildings = ['大厦', '广场', '花园', '小区', '公寓', '中心', '大楼', '商城', 'plaza', '国际'];
    
    const addresses = [];
    
    for (let i = 0; i < count; i++) {
        let address;
        const province = provinces[Math.floor(Math.random() * provinces.length)];
        const city = cities[Math.floor(Math.random() * cities.length)];
        const street = streets[Math.floor(Math.random() * streets.length)];
        const building = buildings[Math.floor(Math.random() * buildings.length)];
        const number = Math.floor(Math.random() * 999 + 1);
        
        switch (type) {
            case 'full':
                address = `${province}${city}${street}${number}号${building}`;
                break;
            case 'city':
                address = `${province}${city}`;
                break;
            case 'street':
                address = `${street}${number}号${building}`;
                break;
        }
        addresses.push(address);
    }
    
    result.value = addresses.join('\n');
}

// 时间戳转日期
function timestampToDate() {
    const timestamp = document.getElementById('timestamp-input').value;
    const result = document.getElementById('timestamp-to-date-result');
    
    if (!timestamp) {
        result.textContent = '请输入时间戳';
        return;
    }
    
    try {
        let ts = parseInt(timestamp);
        // 判断是秒还是毫秒
        if (ts.toString().length === 10) {
            ts *= 1000; // 转换为毫秒
        }
        
        const date = new Date(ts);
        const formatted = date.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        result.innerHTML = `
            <div>本地时间: ${formatted}</div>
            <div>UTC时间: ${date.toUTCString()}</div>
            <div>ISO格式: ${date.toISOString()}</div>
        `;
    } catch (error) {
        result.textContent = '无效的时间戳格式';
    }
}

// 日期转时间戳
function dateToTimestamp() {
    const dateInput = document.getElementById('date-input').value;
    const result = document.getElementById('date-to-timestamp-result');
    
    if (!dateInput) {
        result.textContent = '请选择日期时间';
        return;
    }
    
    try {
        const date = new Date(dateInput);
        const timestamp = date.getTime();
        const timestampSeconds = Math.floor(timestamp / 1000);
        
        result.innerHTML = `
            <div>毫秒时间戳: ${timestamp}</div>
            <div>秒时间戳: ${timestampSeconds}</div>
        `;
    } catch (error) {
        result.textContent = '无效的日期格式';
    }
}

// 获取当前时间戳
function getCurrentTimestamp() {
    const result = document.getElementById('current-timestamp-result');
    const now = new Date();
    const timestamp = now.getTime();
    const timestampSeconds = Math.floor(timestamp / 1000);
    
    result.innerHTML = `
        <div>当前时间: ${now.toLocaleString('zh-CN')}</div>
        <div>毫秒时间戳: ${timestamp}</div>
        <div>秒时间戳: ${timestampSeconds}</div>
    `;
}

// 字数统计
function countWords() {
    const text = document.getElementById('text-input').value;
    
    // 字符数（含空格）
    const charCountWithSpace = text.length;
    document.getElementById('char-count-with-space').textContent = charCountWithSpace;
    
    // 字符数（不含空格）
    const charCountNoSpace = text.replace(/\s/g, '').length;
    document.getElementById('char-count-no-space').textContent = charCountNoSpace;
    
    // 单词数
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = text.trim() === '' ? 0 : words.length;
    document.getElementById('word-count').textContent = wordCount;
    
    // 行数
    const lines = text.split('\n');
    const lineCount = text === '' ? 0 : lines.length;
    document.getElementById('line-count').textContent = lineCount;
    
    // 段落数
    const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    const paragraphCount = text.trim() === '' ? 0 : paragraphs.length;
    document.getElementById('paragraph-count').textContent = paragraphCount;
}

// 清空文本
function clearText() {
    document.getElementById('text-input').value = '';
    countWords();
}

// 文本对比功能
function compareTexts() {
    const textA = document.getElementById('text-a').value;
    const textB = document.getElementById('text-b').value;
    
    // 更新文本信息
    updateTextInfo('a', textA);
    updateTextInfo('b', textB);
    
    if (!textA && !textB) {
        document.getElementById('diff-result').innerHTML = '<p class="diff-hint">输入两个文本进行对比，差异将在这里显示</p>';
        updateSummary(0, 0, 0);
        return;
    }
    
    // 获取对比选项
    const ignoreCase = document.getElementById('ignore-case').checked;
    const ignoreWhitespace = document.getElementById('ignore-whitespace').checked;
    const ignoreEmptyLines = document.getElementById('ignore-empty-lines').checked;
    
    // 预处理文本
    const processedA = preprocessText(textA, ignoreCase, ignoreWhitespace, ignoreEmptyLines);
    const processedB = preprocessText(textB, ignoreCase, ignoreWhitespace, ignoreEmptyLines);
    
    // 按行分割
    const linesA = processedA.split('\n');
    const linesB = processedB.split('\n');
    
    // 执行对比
    const diffResult = computeDiff(linesA, linesB);
    
    // 显示结果
    displayDiffResult(diffResult, linesA, linesB);
}

function updateTextInfo(suffix, text) {
    const lines = text.split('\n').length;
    const chars = text.length;
    
    document.getElementById(`lines-${suffix}`).textContent = lines;
    document.getElementById(`chars-${suffix}`).textContent = chars;
}

function preprocessText(text, ignoreCase, ignoreWhitespace, ignoreEmptyLines) {
    let processed = text;
    
    if (ignoreCase) {
        processed = processed.toLowerCase();
    }
    
    if (ignoreWhitespace) {
        processed = processed.replace(/\s+/g, ' ').trim();
    }
    
    if (ignoreEmptyLines) {
        processed = processed.split('\n').filter(line => line.trim() !== '').join('\n');
    }
    
    return processed;
}

function computeDiff(linesA, linesB) {
    const maxLen = Math.max(linesA.length, linesB.length);
    const result = [];
    
    for (let i = 0; i < maxLen; i++) {
        const lineA = i < linesA.length ? linesA[i] : undefined;
        const lineB = i < linesB.length ? linesB[i] : undefined;
        
        if (lineA === undefined) {
            result.push({ type: 'added', lineB: lineB, lineNum: i + 1 });
        } else if (lineB === undefined) {
            result.push({ type: 'removed', lineA: lineA, lineNum: i + 1 });
        } else if (lineA === lineB) {
            result.push({ type: 'same', lineA: lineA, lineB: lineB, lineNum: i + 1 });
        } else {
            result.push({ type: 'modified', lineA: lineA, lineB: lineB, lineNum: i + 1 });
        }
    }
    
    return result;
}

function displayDiffResult(diffResult, linesA, linesB) {
    const diffDisplay = document.getElementById('diff-result');
    let html = '';
    
    let sameCount = 0;
    let diffCount = 0;
    
    diffResult.forEach(item => {
        const lineNum = `<span class="line-number">${item.lineNum}</span>`;
        
        switch (item.type) {
            case 'same':
                html += `<div class="diff-line diff-same">${lineNum}${escapeHtml(item.lineA)}</div>`;
                sameCount++;
                break;
            case 'added':
                html += `<div class="diff-line diff-added">${lineNum}+ ${escapeHtml(item.lineB)}</div>`;
                diffCount++;
                break;
            case 'removed':
                html += `<div class="diff-line diff-removed">${lineNum}- ${escapeHtml(item.lineA)}</div>`;
                diffCount++;
                break;
            case 'modified':
                html += `<div class="diff-line diff-removed">${lineNum}- ${escapeHtml(item.lineA)}</div>`;
                html += `<div class="diff-line diff-added">${lineNum}+ ${escapeHtml(item.lineB)}</div>`;
                diffCount++;
                break;
        }
    });
    
    if (html === '') {
        html = '<p class="diff-hint">两个文本完全相同</p>';
    }
    
    diffDisplay.innerHTML = html;
    
    // 计算相似度
    const totalLines = Math.max(linesA.length, linesB.length);
    const similarity = totalLines > 0 ? Math.round((sameCount / totalLines) * 100) : 100;
    
    updateSummary(sameCount, diffCount, similarity);
}

function updateSummary(sameCount, diffCount, similarity) {
    document.getElementById('same-lines').textContent = sameCount;
    document.getElementById('diff-lines').textContent = diffCount;
    document.getElementById('similarity').textContent = similarity + '%';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function clearCompareTexts() {
    document.getElementById('text-a').value = '';
    document.getElementById('text-b').value = '';
    document.getElementById('diff-result').innerHTML = '<p class="diff-hint">输入两个文本进行对比，差异将在这里显示</p>';
    updateTextInfo('a', '');
    updateTextInfo('b', '');
    updateSummary(0, 0, 0);
}

function copyCompareResult() {
    const diffDisplay = document.getElementById('diff-result');
    const summary = document.getElementById('compare-summary');
    
    let reportText = '=== 文本对比报告 ===\n\n';
    reportText += `相同行数: ${document.getElementById('same-lines').textContent}\n`;
    reportText += `不同行数: ${document.getElementById('diff-lines').textContent}\n`;
    reportText += `相似度: ${document.getElementById('similarity').textContent}\n\n`;
    reportText += '=== 详细差异 ===\n';
    
    const diffLines = diffDisplay.querySelectorAll('.diff-line');
    diffLines.forEach(line => {
        reportText += line.textContent + '\n';
    });
    
    // 创建临时文本区域进行复制
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = reportText;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    
    try {
        document.execCommand('copy');
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '已复制!';
        button.classList.add('copy-success');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copy-success');
        }, 2000);
    } catch (err) {
        alert('复制失败，请手动复制');
    } finally {
        document.body.removeChild(tempTextarea);
    }
}

// 正则表达式测试工具功能
function testRegex() {
    const pattern = document.getElementById('regex-pattern').value;
    const flags = document.getElementById('regex-flags').value;
    const testText = document.getElementById('test-text').value;
    
    // 更新状态
    updateRegexStatus(pattern, flags);
    
    if (!pattern || !testText) {
        clearRegexResults();
        return;
    }
    
    try {
        const regex = new RegExp(pattern, flags);
        const matches = [];
        let match;
        
        if (flags.includes('g')) {
            // 全局匹配
            while ((match = regex.exec(testText)) !== null) {
                matches.push({
                    match: match[0],
                    index: match.index,
                    groups: match.slice(1),
                    fullMatch: match
                });
                
                // 防止无限循环（零宽度匹配）
                if (match.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
            }
        } else {
            // 单次匹配
            match = regex.exec(testText);
            if (match) {
                matches.push({
                    match: match[0],
                    index: match.index,
                    groups: match.slice(1),
                    fullMatch: match
                });
            }
        }
        
        // 更新匹配数量
        document.getElementById('match-count').textContent = matches.length;
        
        // 显示结果
        displayMatches(matches, testText);
        displayGroups(matches);
        
        // 如果在替换标签页，更新替换结果
        if (document.getElementById('replace-tab').classList.contains('active')) {
            testReplace();
        }
        
    } catch (error) {
        document.getElementById('regex-status').textContent = '无效';
        document.getElementById('regex-status').className = 'status-invalid';
        clearRegexResults();
    }
}

function updateRegexStatus(pattern, flags) {
    const statusElement = document.getElementById('regex-status');
    
    if (!pattern) {
        statusElement.textContent = '空';
        statusElement.className = 'status-invalid';
        return;
    }
    
    try {
        new RegExp(pattern, flags);
        statusElement.textContent = '有效';
        statusElement.className = 'status-valid';
    } catch (error) {
        statusElement.textContent = '无效';
        statusElement.className = 'status-invalid';
    }
}

function displayMatches(matches, testText) {
    const highlightedText = document.getElementById('highlighted-text');
    const matchesList = document.getElementById('matches-list');
    
    if (matches.length === 0) {
        highlightedText.innerHTML = '<p class="placeholder-text">没有找到匹配项</p>';
        matchesList.innerHTML = '<p class="placeholder-text">暂无匹配结果</p>';
        return;
    }
    
    // 高亮显示匹配文本 - 从后往前处理避免位置偏移问题
    let highlightedContent = escapeHtml(testText);
    
    // 按位置从后往前排序，避免插入HTML标签影响后续位置
    const sortedMatches = [...matches].sort((a, b) => b.index - a.index);
    
    sortedMatches.forEach((matchInfo) => {
        const start = matchInfo.index;
        const end = start + matchInfo.match.length;
        const highlightedMatch = `<span class="regex-match">${escapeHtml(matchInfo.match)}</span>`;
        
        highlightedContent = highlightedContent.slice(0, start) + 
                           highlightedMatch + 
                           highlightedContent.slice(end);
    });
    
    // 保持换行符的显示
    highlightedContent = highlightedContent.replace(/\n/g, '\n');
    
    highlightedText.innerHTML = highlightedContent;
    
    // 显示匹配列表
    let matchesHtml = '';
    matches.forEach((matchInfo, index) => {
        matchesHtml += `
            <div class="match-item">
                <div class="match-index">匹配 ${index + 1}:</div>
                <div class="match-text">${escapeHtml(matchInfo.match)}</div>
                <div class="match-position">位置: ${matchInfo.index} - ${matchInfo.index + matchInfo.match.length - 1}</div>
            </div>
        `;
    });
    
    matchesList.innerHTML = matchesHtml;
}

function displayGroups(matches) {
    const groupsList = document.getElementById('groups-list');
    
    if (matches.length === 0) {
        groupsList.innerHTML = '<p class="placeholder-text">暂无分组信息</p>';
        return;
    }
    
    let groupsHtml = '';
    
    matches.forEach((matchInfo, matchIndex) => {
        if (matchInfo.groups.length > 0) {
            groupsHtml += `
                <div class="group-item">
                    <div class="group-header">匹配 ${matchIndex + 1} 的分组:</div>
                    <div class="group-content">
            `;
            
            matchInfo.groups.forEach((group, groupIndex) => {
                if (group !== undefined) {
                    groupsHtml += `
                        <div class="group-text">$${groupIndex + 1}: ${escapeHtml(group)}</div>
                    `;
                }
            });
            
            groupsHtml += `
                    </div>
                </div>
            `;
        }
    });
    
    if (groupsHtml === '') {
        groupsList.innerHTML = '<p class="placeholder-text">没有捕获分组</p>';
    } else {
        groupsList.innerHTML = groupsHtml;
    }
}

function testReplace() {
    const pattern = document.getElementById('regex-pattern').value;
    const flags = document.getElementById('regex-flags').value;
    const testText = document.getElementById('test-text').value;
    const replaceText = document.getElementById('replace-text').value;
    const replaceResult = document.getElementById('replace-result');
    
    if (!pattern || !testText) {
        replaceResult.innerHTML = '<p class="placeholder-text">输入正则表达式和测试文本</p>';
        return;
    }
    
    if (replaceText === '') {
        replaceResult.innerHTML = '<p class="placeholder-text">输入替换文本查看结果</p>';
        return;
    }
    
    try {
        const regex = new RegExp(pattern, flags);
        const result = testText.replace(regex, replaceText);
        replaceResult.textContent = result;
    } catch (error) {
        replaceResult.innerHTML = '<p class="placeholder-text">正则表达式无效</p>';
    }
}

function clearRegexResults() {
    document.getElementById('match-count').textContent = '0';
    document.getElementById('highlighted-text').innerHTML = '<p class="placeholder-text">输入正则表达式和测试文本，匹配结果将在这里高亮显示</p>';
    document.getElementById('matches-list').innerHTML = '<p class="placeholder-text">暂无匹配结果</p>';
    document.getElementById('groups-list').innerHTML = '<p class="placeholder-text">暂无分组信息</p>';
    document.getElementById('replace-result').innerHTML = '<p class="placeholder-text">输入替换文本查看结果</p>';
}

function toggleFlag(flag) {
    const flagsInput = document.getElementById('regex-flags');
    const flagBtn = event.target;
    let flags = flagsInput.value;
    
    if (flags.includes(flag)) {
        flags = flags.replace(flag, '');
        flagBtn.classList.remove('active');
    } else {
        flags += flag;
        flagBtn.classList.add('active');
    }
    
    flagsInput.value = flags;
    testRegex();
}

function showTab(tabName) {
    // 隐藏所有标签页
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 显示选中的标签页
    document.getElementById(tabName + '-tab').classList.add('active');
    event.target.classList.add('active');
    
    // 如果切换到替换标签页，执行替换测试
    if (tabName === 'replace') {
        testReplace();
    }
}

function clearRegexTest() {
    document.getElementById('regex-pattern').value = '';
    document.getElementById('regex-flags').value = '';
    document.getElementById('test-text').value = '';
    document.getElementById('replace-text').value = '';
    
    // 重置标志按钮
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 清空结果
    clearRegexResults();
    updateRegexStatus('', '');
}

function copyRegexResult() {
    const matchesList = document.getElementById('matches-list');
    const text = matchesList.textContent || matchesList.innerText;
    
    navigator.clipboard.writeText(text).then(() => {
        // 可以添加复制成功的提示
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '已复制';
        btn.style.background = '#28a745';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

// JSON数据对比工具功能
function formatJSON(side) {
    const textarea = document.getElementById(`json-${side}`);
    const statusElement = document.getElementById(`json-${side}-status`);
    
    try {
        const jsonText = textarea.value.trim();
        if (!jsonText) {
            statusElement.textContent = '待验证';
            statusElement.className = 'status-pending';
            return;
        }
        
        const parsed = JSON.parse(jsonText);
        const formatted = JSON.stringify(parsed, null, 2);
        textarea.value = formatted;
        
        statusElement.textContent = '格式正确';
        statusElement.className = 'status-valid';
        
        compareJSON();
    } catch (error) {
        statusElement.textContent = '格式错误';
        statusElement.className = 'status-invalid';
        
        // 显示错误信息
        const errorMsg = `JSON格式错误: ${error.message}`;
        console.error(errorMsg);
    }
}

function clearJSON(side) {
    document.getElementById(`json-${side}`).value = '';
    document.getElementById(`json-${side}-status`).textContent = '待验证';
    document.getElementById(`json-${side}-status`).className = 'status-pending';
    compareJSON();
}

function clearAllJSON() {
    clearJSON('left');
    clearJSON('right');
    
    // 清空结果显示
    document.getElementById('differences-list').innerHTML = '<p class="placeholder-text">输入两个JSON数据进行对比，差异将在这里显示</p>';
    document.getElementById('structure-compare').innerHTML = '<p class="placeholder-text">JSON结构对比信息将在这里显示</p>';
    
    // 重置统计数据
    document.getElementById('same-fields').textContent = '0';
    document.getElementById('diff-fields').textContent = '0';
    document.getElementById('added-fields').textContent = '0';
    document.getElementById('removed-fields').textContent = '0';
    
    document.getElementById('compare-status').textContent = '待对比';
    document.getElementById('compare-status').className = 'status-pending';
}

function compareJSON() {
    const leftText = document.getElementById('json-left').value.trim();
    const rightText = document.getElementById('json-right').value.trim();
    const compareStatus = document.getElementById('compare-status');
    
    // 验证JSON格式
    let leftJSON, rightJSON;
    let leftValid = false, rightValid = false;
    
    try {
        if (leftText) {
            leftJSON = JSON.parse(leftText);
            leftValid = true;
            document.getElementById('json-left-status').textContent = '格式正确';
            document.getElementById('json-left-status').className = 'status-valid';
        } else {
            document.getElementById('json-left-status').textContent = '待验证';
            document.getElementById('json-left-status').className = 'status-pending';
        }
    } catch (error) {
        document.getElementById('json-left-status').textContent = '格式错误';
        document.getElementById('json-left-status').className = 'status-invalid';
    }
    
    try {
        if (rightText) {
            rightJSON = JSON.parse(rightText);
            rightValid = true;
            document.getElementById('json-right-status').textContent = '格式正确';
            document.getElementById('json-right-status').className = 'status-valid';
        } else {
            document.getElementById('json-right-status').textContent = '待验证';
            document.getElementById('json-right-status').className = 'status-pending';
        }
    } catch (error) {
        document.getElementById('json-right-status').textContent = '格式错误';
        document.getElementById('json-right-status').className = 'status-invalid';
    }
    
    if (!leftValid || !rightValid) {
        compareStatus.textContent = '请输入有效的JSON数据';
        compareStatus.className = 'status-invalid';
        return;
    }
    
    // 执行对比
    const differences = findJSONDifferences(leftJSON, rightJSON);
    displayDifferences(differences);
    displayStructureComparison(leftJSON, rightJSON);
    updateSummaryStats(differences);
    
    if (differences.length === 0) {
        compareStatus.textContent = 'JSON数据完全相同';
        compareStatus.className = 'status-valid';
    } else {
        compareStatus.textContent = `发现 ${differences.length} 处差异`;
        compareStatus.className = 'status-invalid';
    }
}

function findJSONDifferences(obj1, obj2, path = '') {
    const differences = [];
    
    // 获取所有键
    const keys1 = new Set(Object.keys(obj1 || {}));
    const keys2 = new Set(Object.keys(obj2 || {}));
    const allKeys = new Set([...keys1, ...keys2]);
    
    for (const key of allKeys) {
        const currentPath = path ? `${path}.${key}` : key;
        const val1 = obj1?.[key];
        const val2 = obj2?.[key];
        
        if (!keys1.has(key)) {
            // 新增字段
            differences.push({
                type: 'added',
                path: currentPath,
                value: val2
            });
        } else if (!keys2.has(key)) {
            // 删除字段
            differences.push({
                type: 'removed',
                path: currentPath,
                value: val1
            });
        } else if (typeof val1 !== typeof val2) {
            // 类型不同
            differences.push({
                type: 'modified',
                path: currentPath,
                oldValue: val1,
                newValue: val2
            });
        } else if (typeof val1 === 'object' && val1 !== null && val2 !== null) {
            // 递归比较对象
            if (Array.isArray(val1) && Array.isArray(val2)) {
                // 数组比较
                const arrayDiffs = compareArrays(val1, val2, currentPath);
                differences.push(...arrayDiffs);
            } else if (!Array.isArray(val1) && !Array.isArray(val2)) {
                // 对象比较
                const objDiffs = findJSONDifferences(val1, val2, currentPath);
                differences.push(...objDiffs);
            } else {
                // 一个是数组，一个是对象
                differences.push({
                    type: 'modified',
                    path: currentPath,
                    oldValue: val1,
                    newValue: val2
                });
            }
        } else if (val1 !== val2) {
            // 值不同
            differences.push({
                type: 'modified',
                path: currentPath,
                oldValue: val1,
                newValue: val2
            });
        }
    }
    
    return differences;
}

function compareArrays(arr1, arr2, path) {
    const differences = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    
    for (let i = 0; i < maxLength; i++) {
        const currentPath = `${path}[${i}]`;
        
        if (i >= arr1.length) {
            differences.push({
                type: 'added',
                path: currentPath,
                value: arr2[i]
            });
        } else if (i >= arr2.length) {
            differences.push({
                type: 'removed',
                path: currentPath,
                value: arr1[i]
            });
        } else if (typeof arr1[i] === 'object' && typeof arr2[i] === 'object') {
            const objDiffs = findJSONDifferences(arr1[i], arr2[i], currentPath);
            differences.push(...objDiffs);
        } else if (arr1[i] !== arr2[i]) {
            differences.push({
                type: 'modified',
                path: currentPath,
                oldValue: arr1[i],
                newValue: arr2[i]
            });
        }
    }
    
    return differences;
}

function displayDifferences(differences) {
    const container = document.getElementById('differences-list');
    
    if (differences.length === 0) {
        container.innerHTML = '<p class="placeholder-text">两个JSON数据完全相同</p>';
        return;
    }
    
    const html = differences.map(diff => {
        let content = '';
        let className = 'difference-item';
        
        switch (diff.type) {
            case 'added':
                className += ' difference-added';
                content = `
                    <div class="json-path">+ ${diff.path}</div>
                    <div>新增值: <span class="json-value">${JSON.stringify(diff.value)}</span></div>
                `;
                break;
            case 'removed':
                className += ' difference-removed';
                content = `
                    <div class="json-path">- ${diff.path}</div>
                    <div>删除值: <span class="json-value">${JSON.stringify(diff.value)}</span></div>
                `;
                break;
            case 'modified':
                className += ' difference-modified';
                content = `
                    <div class="json-path">~ ${diff.path}</div>
                    <div>原值: <span class="json-value">${JSON.stringify(diff.oldValue)}</span></div>
                    <div>新值: <span class="json-value">${JSON.stringify(diff.newValue)}</span></div>
                `;
                break;
        }
        
        return `<div class="${className}">${content}</div>`;
    }).join('');
    
    container.innerHTML = html;
}

function displayStructureComparison(obj1, obj2) {
    const container = document.getElementById('structure-compare');
    
    const structure1 = getJSONStructure(obj1, 'JSON A');
    const structure2 = getJSONStructure(obj2, 'JSON B');
    
    container.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h5>JSON A 结构:</h5>
                <pre style="background: #f8f9fa; padding: 10px; border-radius: 4px; font-size: 12px;">${structure1}</pre>
            </div>
            <div>
                <h5>JSON B 结构:</h5>
                <pre style="background: #f8f9fa; padding: 10px; border-radius: 4px; font-size: 12px;">${structure2}</pre>
            </div>
        </div>
    `;
}

function getJSONStructure(obj, prefix = '', depth = 0) {
    if (depth > 3) return '...';
    
    const indent = '  '.repeat(depth);
    
    if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        const firstItem = getJSONStructure(obj[0], '', depth + 1);
        return `[\n${indent}  ${firstItem}\n${indent}] (${obj.length} items)`;
    } else if (typeof obj === 'object' && obj !== null) {
        const keys = Object.keys(obj);
        if (keys.length === 0) return '{}';
        
        const props = keys.slice(0, 5).map(key => {
            const value = getJSONStructure(obj[key], '', depth + 1);
            return `${indent}  ${key}: ${value}`;
        });
        
        if (keys.length > 5) {
            props.push(`${indent}  ... (${keys.length - 5} more)`);
        }
        
        return `{\n${props.join(',\n')}\n${indent}}`;
    } else {
        return typeof obj;
    }
}

function updateSummaryStats(differences) {
    const stats = {
        same: 0,
        different: 0,
        added: 0,
        removed: 0
    };
    
    differences.forEach(diff => {
        switch (diff.type) {
            case 'added':
                stats.added++;
                break;
            case 'removed':
                stats.removed++;
                break;
            case 'modified':
                stats.different++;
                break;
        }
    });
    
    document.getElementById('same-fields').textContent = stats.same;
    document.getElementById('diff-fields').textContent = stats.different;
    document.getElementById('added-fields').textContent = stats.added;
    document.getElementById('removed-fields').textContent = stats.removed;
}

function showJSONTab(tabName) {
    // 移除所有活动状态
    document.querySelectorAll('#jsoncompare-panel .tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('#jsoncompare-panel .tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    // 激活当前标签
    event.target.classList.add('active');
    document.getElementById(tabName + '-tab').classList.add('active');
}

function copyCompareResult() {
    const differences = document.getElementById('differences-list').textContent;
    const summary = document.getElementById('summary-info').textContent;
    
    const result = `JSON对比结果:\n\n差异详情:\n${differences}\n\n对比摘要:\n${summary}`;
    
    navigator.clipboard.writeText(result).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '已复制';
        btn.style.background = '#28a745';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

// 复制结果
function copyResult(elementId) {
    const element = document.getElementById(elementId);
    const button = event.target;
    
    element.select();
    element.setSelectionRange(0, 99999);
    
    try {
        document.execCommand('copy');
        const originalText = button.textContent;
        button.textContent = '已复制!';
        button.classList.add('copy-success');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copy-success');
        }, 2000);
    } catch (err) {
        alert('复制失败，请手动复制');
    }
}

// 打开使用手册
function openManual() {
    // 获取当前页面的路径
    const currentPath = window.location.pathname;
    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
    
    // 构建文档路径
    const manualPath = currentDir + '/测试工程师常用工具使用文档.md';
    
    // 在新窗口中打开文档
    window.open(manualPath, '_blank');
    
    // 备选方案：如果直接打开md文件不行，可以创建一个HTML页面来显示文档内容
    // 或者使用GitHub Pages等服务来渲染markdown
}

// 备选方案：创建模态框显示使用手册
function openManualModal() {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'manual-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>📖 使用手册</h2>
                <button class="close-btn" onclick="closeManual()">&times;</button>
            </div>
            <div class="modal-body">
                <iframe src="测试工程师常用工具使用文档.md" width="100%" height="500px" frameborder="0"></iframe>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// 关闭使用手册模态框
function closeManual() {
    const modal = document.querySelector('.manual-modal');
    if (modal) {
        modal.remove();
    }
}

// 身份证生成功能
function generateIdCards() {
    const count = parseInt(document.getElementById('idcard-count').value);
    const gender = document.getElementById('idcard-gender').value;
    const minAge = parseInt(document.getElementById('min-age').value);
    const maxAge = parseInt(document.getElementById('max-age').value);
    const region = document.getElementById('idcard-region').value;
    
    if (minAge > maxAge) {
        alert('最小年龄不能大于最大年龄');
        return;
    }
    
    const idCards = [];
    
    for (let i = 0; i < count; i++) {
        const idCard = generateSingleIdCard(gender, minAge, maxAge, region);
        idCards.push(idCard);
    }
    
    document.getElementById('idcard-result').value = idCards.join('\n');
}

function generateSingleIdCard(gender, minAge, maxAge, region) {
    // 地区代码映射
    const regionCodes = {
        'random': ['110000', '120000', '130000', '140000', '150000', '210000', '220000', '230000', 
                  '310000', '320000', '330000', '340000', '350000', '360000', '370000', '410000', 
                  '420000', '430000', '440000', '450000', '460000', '500000', '510000', '520000', 
                  '530000', '540000', '610000', '620000', '630000', '640000', '650000'],
        '110000': ['110101', '110102', '110105', '110106', '110107', '110108', '110109'],
        '120000': ['120101', '120102', '120103', '120104', '120105', '120106', '120110'],
        '130000': ['130102', '130104', '130105', '130107', '130108', '130109', '130110'],
        '140000': ['140105', '140106', '140107', '140108', '140109', '140110', '140121'],
        '150000': ['150102', '150103', '150104', '150105', '150121', '150122', '150123'],
        '210000': ['210102', '210103', '210104', '210105', '210106', '210111', '210112'],
        '220000': ['220102', '220103', '220104', '220105', '220106', '220112', '220113'],
        '230000': ['230102', '230103', '230104', '230108', '230109', '230110', '230111'],
        '310000': ['310101', '310104', '310105', '310106', '310107', '310109', '310110'],
        '320000': ['320102', '320104', '320105', '320106', '320111', '320113', '320114'],
        '330000': ['330102', '330103', '330104', '330105', '330106', '330108', '330109'],
        '340000': ['340102', '340103', '340104', '340111', '340121', '340122', '340123'],
        '350000': ['350102', '350103', '350104', '350105', '350111', '350121', '350122'],
        '360000': ['360102', '360103', '360104', '360105', '360111', '360121', '360123'],
        '370000': ['370102', '370103', '370104', '370105', '370112', '370113', '370114'],
        '410000': ['410102', '410103', '410104', '410105', '410106', '410108', '410122'],
        '420000': ['420102', '420103', '420104', '420105', '420106', '420107', '420111'],
        '430000': ['430102', '430103', '430104', '430105', '430111', '430112', '430121'],
        '440000': ['440103', '440104', '440105', '440106', '440111', '440112', '440113'],
        '450000': ['450102', '450103', '450105', '450107', '450108', '450109', '450110'],
        '460000': ['460105', '460106', '460107', '460108', '469001', '469002', '469005'],
        '500000': ['500101', '500102', '500103', '500104', '500105', '500106', '500107'],
        '510000': ['510104', '510105', '510106', '510107', '510108', '510112', '510113'],
        '520000': ['520102', '520103', '520111', '520112', '520113', '520115', '520121'],
        '530000': ['530102', '530103', '530111', '530112', '530113', '530114', '530115'],
        '540000': ['540102', '540121', '540122', '540123', '540124', '540125', '540126'],
        '610000': ['610102', '610103', '610104', '610111', '610112', '610113', '610114'],
        '620000': ['620102', '620103', '620104', '620105', '620111', '620121', '620122'],
        '630000': ['630102', '630103', '630104', '630105', '630121', '630123', '630132'],
        '640000': ['640104', '640105', '640106', '640121', '640122', '640181', '640221'],
        '650000': ['650102', '650103', '650104', '650105', '650106', '650107', '650109']
    };
    
    // 选择地区代码
    let selectedRegion;
    if (region === 'random') {
        const randomRegions = regionCodes['random'];
        const randomRegion = randomRegions[Math.floor(Math.random() * randomRegions.length)];
        const codes = regionCodes[randomRegion];
        selectedRegion = codes[Math.floor(Math.random() * codes.length)];
    } else {
        const codes = regionCodes[region];
        selectedRegion = codes[Math.floor(Math.random() * codes.length)];
    }
    
    // 生成出生日期
    const currentYear = new Date().getFullYear();
    const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
    const birthYear = currentYear - age;
    const birthMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const birthDay = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    const birthDate = `${birthYear}${birthMonth}${birthDay}`;
    
    // 生成顺序码
    let sequenceCode = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0');
    
    // 根据性别调整顺序码最后一位
    if (gender === 'male') {
        // 男性：奇数
        if (parseInt(sequenceCode.slice(-1)) % 2 === 0) {
            sequenceCode = sequenceCode.slice(0, -1) + (parseInt(sequenceCode.slice(-1)) + 1) % 10;
        }
    } else if (gender === 'female') {
        // 女性：偶数
        if (parseInt(sequenceCode.slice(-1)) % 2 === 1) {
            sequenceCode = sequenceCode.slice(0, -1) + (parseInt(sequenceCode.slice(-1)) + 1) % 10;
        }
    }
    
    // 前17位
    const first17 = selectedRegion + birthDate + sequenceCode;
    
    // 计算校验码
    const checkCode = calculateCheckCode(first17);
    
    return first17 + checkCode;
}

function calculateCheckCode(first17) {
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    
    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += parseInt(first17[i]) * weights[i];
    }
    
    const remainder = sum % 11;
    return checkCodes[remainder];
}

// 时间换算工具
function convertTime() {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    
    if (isNaN(inputValue)) {
        document.getElementById('convert-result').innerHTML = '<div style="color: #e74c3c;">请输入有效的数值</div>';
        return;
    }
    
    // 转换为秒作为基准单位
    const toSeconds = {
        'milliseconds': 0.001,
        'seconds': 1,
        'minutes': 60,
        'hours': 3600,
        'days': 86400,
        'weeks': 604800,
        'months': 2592000, // 30天
        'years': 31536000  // 365天
    };
    
    const seconds = inputValue * toSeconds[fromUnit];
    const result = seconds / toSeconds[toUnit];
    
    const unitNames = {
        'milliseconds': '毫秒',
        'seconds': '秒',
        'minutes': '分钟',
        'hours': '小时',
        'days': '天',
        'weeks': '周',
        'months': '月',
        'years': '年'
    };
    
    document.getElementById('convert-result').innerHTML = `
        <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 6px; margin-top: 10px;">
            <strong>转换结果：</strong><br>
            ${inputValue} ${unitNames[fromUnit]} = ${formatNumber(result)} ${unitNames[toUnit]}
        </div>
    `;
}

// 日期加减计算
function calculateDate() {
    const startDate = document.getElementById('start-date').value;
    const operation = document.getElementById('operation').value;
    const calcValue = parseInt(document.getElementById('calc-value').value);
    const calcUnit = document.getElementById('calc-unit').value;
    
    if (!startDate || isNaN(calcValue)) {
        document.getElementById('calc-result').innerHTML = '<div style="color: #e74c3c;">请填写完整的日期和数值</div>';
        return;
    }
    
    const date = new Date(startDate);
    const value = operation === 'add' ? calcValue : -calcValue;
    
    switch (calcUnit) {
        case 'days':
            date.setDate(date.getDate() + value);
            break;
        case 'weeks':
            date.setDate(date.getDate() + (value * 7));
            break;
        case 'months':
            date.setMonth(date.getMonth() + value);
            break;
        case 'years':
            date.setFullYear(date.getFullYear() + value);
            break;
    }
    
    const unitNames = {
        'days': '天',
        'weeks': '周',
        'months': '月',
        'years': '年'
    };
    
    const operationText = operation === 'add' ? '加上' : '减去';
    
    document.getElementById('calc-result').innerHTML = `
        <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 6px; margin-top: 10px;">
            <strong>计算结果：</strong><br>
            ${startDate} ${operationText} ${calcValue} ${unitNames[calcUnit]} = ${formatDate(date)}<br>
            <small>星期${getWeekDay(date)}</small>
        </div>
    `;
}

// 日期间隔计算
function calculateDateDiff() {
    const startDate = document.getElementById('diff-start-date').value;
    const endDate = document.getElementById('diff-end-date').value;
    
    if (!startDate || !endDate) {
        document.getElementById('date-diff-result').innerHTML = '<div style="color: #e74c3c;">请选择开始和结束日期</div>';
        return;
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    const resultElement = document.getElementById('date-diff-result');
    
    if (resultElement) {
        resultElement.innerHTML = `
            <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 6px; margin-top: 10px;">
                <strong>日期间隔：</strong><br>
                总天数：${days} 天<br>
                约 ${weeks} 周 ${days % 7} 天<br>
                约 ${months} 个月<br>
                约 ${years} 年 ${Math.floor((days % 365) / 30)} 个月
            </div>
        `;
    }
}

// 计算工作日
function getWorkdays() {
    const startDate = document.getElementById('diff-start-date').value;
    const endDate = document.getElementById('diff-end-date').value;
    
    if (!startDate || !endDate) {
        document.getElementById('special-result').innerHTML = '<div style="color: #e74c3c;">请先在日期间隔计算中选择日期范围</div>';
        return;
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    let workdays = 0;
    
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dayOfWeek = d.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // 不是周日(0)和周六(6)
            workdays++;
        }
    }
    
    document.getElementById('special-result').innerHTML = `
        <div style="background: #d1ecf1; color: #0c5460; padding: 15px; border-radius: 6px; margin-top: 10px;">
            <strong>工作日统计：</strong><br>
            从 ${startDate} 到 ${endDate}<br>
            共有 ${workdays} 个工作日
        </div>
    `;
}

// 计算周末天数
function getWeekends() {
    const startDate = document.getElementById('diff-start-date').value;
    const endDate = document.getElementById('diff-end-date').value;
    
    if (!startDate || !endDate) {
        document.getElementById('special-result').innerHTML = '<div style="color: #e74c3c;">请先在日期间隔计算中选择日期范围</div>';
        return;
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    let weekends = 0;
    
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dayOfWeek = d.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) { // 周日(0)和周六(6)
            weekends++;
        }
    }
    
    document.getElementById('special-result').innerHTML = `
        <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 6px; margin-top: 10px;">
            <strong>周末统计：</strong><br>
            从 ${startDate} 到 ${endDate}<br>
            共有 ${weekends} 个周末日
        </div>
    `;
}

// 计算年龄
function getAge() {
    const startDate = document.getElementById('diff-start-date').value;
    
    if (!startDate) {
        document.getElementById('special-result').innerHTML = '<div style="color: #e74c3c;">请先在日期间隔计算中选择出生日期（开始日期）</div>';
        return;
    }
    
    const birthDate = new Date(startDate);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    
    const daysToNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
    
    document.getElementById('special-result').innerHTML = `
        <div style="background: #fff3cd; color: #856404; padding: 15px; border-radius: 6px; margin-top: 10px;">
            <strong>年龄计算：</strong><br>
            出生日期：${startDate}<br>
            当前年龄：${age} 岁<br>
            距离下次生日还有：${daysToNextBirthday} 天
        </div>
    `;
}

// 辅助函数
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + ' 百万';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(2) + ' 千';
    } else if (num < 1 && num > 0) {
        return num.toFixed(6);
    } else {
        return num.toFixed(2);
    }
}

function formatDate(date) {
    return date.getFullYear() + '-' + 
           String(date.getMonth() + 1).padStart(2, '0') + '-' + 
           String(date.getDate()).padStart(2, '0');
}

function getWeekDay(date) {
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    return weekDays[date.getDay()];
}