
const copyButtonHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Copy Text</title>
        <path d="M19.4628 5.57573C18.7755 4.82597 17.5344 4.77977 16.7071 5.60711L8.60706 13.7071C8.39758 13.9166 8.39758 14.1834 8.60706 14.3929C8.81653 14.6024 9.08337 14.6024 9.29284 14.3929L15.9928 7.6929C16.3834 7.30238 17.0165 7.30238 17.4071 7.6929C17.7976 8.08342 17.7976 8.71659 17.4071 9.10711L10.7071 15.8071C9.71653 16.7976 8.18337 16.7976 7.19284 15.8071C6.20232 14.8166 6.20232 13.2834 7.19284 12.2929L15.2928 4.1929C16.8604 2.62537 19.4077 2.57436 20.9223 4.20821C22.4746 5.77662 22.5203 8.31157 20.8928 9.82133L11.4071 19.3071C9.21653 21.4976 5.78337 21.4976 3.59284 19.3071C1.40232 17.1166 1.40232 13.6834 3.59284 11.4929L11.6928 3.3929C12.0834 3.00238 12.7165 3.00238 13.1071 3.3929C13.4976 3.78342 13.4976 4.41659 13.1071 4.80711L5.00706 12.9071C3.59758 14.3166 3.59758 16.4834 5.00706 17.8929C6.41653 19.3024 8.58337 19.3024 9.99284 17.8929L19.4928 8.3929C19.5031 8.38266 19.5135 8.37264 19.5242 8.36285C20.274 7.67557 20.3202 6.43446 19.4928 5.60711C19.4826 5.59687 19.4726 5.58641 19.4628 5.57573Z" fill="#bbbbbb"></path>
    </svg>
`.trim();

const copiedButtonHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Copied!</title>
        <path d="M20.6644 5.2526C21.0772 5.61952 21.1143 6.25159 20.7474 6.66437L10.0808 18.6644C9.89099 18.8779 9.61898 19 9.33334 19C9.04771 19 8.7757 18.8779 8.58593 18.6644L3.2526 12.6644C2.88568 12.2516 2.92286 11.6195 3.33565 11.2526C3.74843 10.8857 4.3805 10.9229 4.74742 11.3356L9.33334 16.4948L19.2526 5.33565C19.6195 4.92286 20.2516 4.88568 20.6644 5.2526Z" fill="#bbbbbb"></path>
    </svg>
`.trim();

window.onload = function() {
    // Select only the code section with div (= code blocks)
    var codeBlocks = document.querySelectorAll('div.highlighter-rouge');

    codeBlocks.forEach((block, index) => {
        const code = block.innerText;
    
        var button = document.createElement('div');
        button.classList.add('copy-code-button');
        button.innerHTML = copyButtonHTML;
    
        button.addEventListener('click', () => {
            window.navigator.clipboard.writeText(code);
            button.innerHTML = copiedButtonHTML;
    
            setTimeout(() => {
                button.innerHTML = copyButtonHTML;
            }, 1000);
        });

        block.appendChild(button);
    });
}
