import Head from 'next/head'
import Image from 'next/image'
import styles from "styles/home.module.scss";

export default function Home() {
    // https://freefrontend.com/css-book-effects/
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th rowspan="2" colspan="1">
                                    Giá SEO tổng thể
                                </th>
                                <th rowspan="1" colspan="1">
                                    Gói Cơ Bản
                                </th>
                                <th rowspan="1" colspan="1">
                                    Gói Nâng Cao
                                </th>
                                <th rowspan="1" colspan="1">
                                    Gói Chuyên Sâu
                                </th>
                            </tr>
                            <tr>
                                <th rowspan="1" colspan="1">
                                    175,000,000đ
                                </th>
                                <th rowspan="1" colspan="1">
                                    250,000,000đ
                                </th>
                                <th rowspan="1" colspan="1">
                                    Liên hệ tư vấn
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Số lượng từ khóa</td>
                                <td
                                    data-title="Số lượng từ khóa"
                                    data-content="150 - 170"
                                >
                                    <div>150 - 170</div>
                                </td>
                                <td
                                    data-title="Số lượng từ khóa"
                                    data-content="230 - 250"
                                >
                                    <div>230 - 250</div>
                                </td>
                                <td
                                    data-title="Số lượng từ khóa"
                                    data-content="500 - 1500"
                                >
                                    <div>500 - 1500</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Thời gian SEO</td>
                                <td
                                    data-title="Thời gian SEO"
                                    data-content="6 - 8 tháng"
                                >
                                    <div>6 - 8 tháng</div>
                                </td>
                                <td
                                    data-title="Thời gian SEO"
                                    data-content="8 - 10 tháng"
                                >
                                    <div>8 - 10 tháng</div>
                                </td>
                                <td
                                    data-title="Thời gian SEO"
                                    data-content="12+ tháng"
                                >
                                    <div>12+ tháng</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Cam kết KPI</td>
                                <td
                                    data-title="Cam kết KPI"
                                    data-content="30% top 5 80% top 10"
                                >
                                    <div>
                                        <div>30% top 5</div>
                                        <div>80% top 10</div>
                                    </div>
                                </td>
                                <td
                                    data-title="Cam kết KPI"
                                    data-content="30% top 5 80% top 10"
                                >
                                    <div>
                                        <div>30% top 5</div>
                                        <div>80% top 10</div>
                                    </div>
                                </td>
                                <td
                                    data-title="Cam kết KPI"
                                    data-content="30% top 5 80% top 10"
                                >
                                    <div>
                                        <div>30% top 5</div>
                                        <div>80% top 10</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Cam kết traffic theo từng ngành</td>
                                <td
                                    data-title="Cam kết traffic theo từng ngành"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                                <td
                                    data-title="Cam kết traffic theo từng ngành"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                                <td
                                    data-title="Cam kết traffic theo từng ngành"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Hỗ trợ SEO Image</td>
                                <td
                                    data-title="Hỗ trợ SEO Image"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ SEO Image"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ SEO Image"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Hỗ trợ SEO Google Map</td>
                                <td
                                    data-title="Hỗ trợ SEO Google Map"
                                    data-content="✕"
                                >
                                    <span>✕</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ SEO Google Map"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ SEO Google Map"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Hỗ trợ SEO Youtube</td>
                                <td
                                    data-title="Hỗ trợ SEO Youtube"
                                    data-content="✕"
                                >
                                    <span>✕</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ SEO Youtube"
                                    data-content="✕"
                                >
                                    <span>✕</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ SEO Youtube"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Hỗ trợ tối ưu Google Ads miễn phí</td>
                                <td
                                    data-title="Hỗ trợ tối ưu Google Ads miễn phí"
                                    data-content="✕"
                                >
                                    <span>✕</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ tối ưu Google Ads miễn phí"
                                    data-content="✕"
                                >
                                    <span>✕</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ tối ưu Google Ads miễn phí"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Báo cáo định kỳ hằng tháng</td>
                                <td
                                    data-title="Báo cáo định kỳ hằng tháng"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                                <td
                                    data-title="Báo cáo định kỳ hằng tháng"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                                <td
                                    data-title="Báo cáo định kỳ hằng tháng"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Hỗ trợ viết content chuẩn SEO, tối ưu dung
                                    lượng hình ảnh
                                </td>
                                <td
                                    data-title="Hỗ trợ viết content chuẩn SEO, tối ưu dung
                                    lượng hình ảnh"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ viết content chuẩn SEO, tối ưu dung
                                    lượng hình ảnh"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                                <td
                                    data-title="Hỗ trợ viết content chuẩn SEO, tối ưu dung
                                    lượng hình ảnh"
                                    data-content="✓"
                                >
                                    <span>✓</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>SEO onsite</h6>
                                    <p>
                                        Kiểm tra file sitemap.xml, robots.txt,
                                        .htaccess, thẻ Meta robot: index hay
                                        noindex, thẻ Canonical, quét lỗi 404
                                        toàn trang, page speed, Mobile Friendly,
                                        Breadcrumb, Table Of Content, Schema
                                        Validator
                                    </p>
                                </td>
                                <td data-title="SEO onsite" data-content="✓">
                                    <span>✓</span>
                                </td>
                                <td data-title="SEO onsite" data-content="✓">
                                    <span>✓</span>
                                </td>
                                <td data-title="SEO onsite" data-content="✓">
                                    <span>✓</span>
                                </td>
                            </tr>
                            <tr>
                                <td rowspan="5">
                                    Thanh toán theo
                                    <span>3 giai đoạn</span>
                                </td>
                            </tr>
                            <tr class="odd:bg-gleads-greys-100">
                                <td text="Giai đoạn 1 (bắt đầu dự án)">
                                    Giai đoạn 1 (bắt đầu dự án)
                                </td>
                                <td
                                    colspan="2"
                                    text="<div><span class='text-gleads-pink-700 font-bold'>50%</span> của hợp đồng</div>"
                                >
                                    <div>
                                        <span>50%</span> của hợp đồng
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td text="Giai đoạn 2">Giai đoạn 2</td>
                                <td
                                    colspan="2"
                                    text="<div><span class='text-gleads-pink-700 font-bold'>20%</span> khi 60% tổng từ khóa lên trang 2</div>"
                                >
                                    <div>
                                        <span>20%</span>
                                        khi 60% tổng từ khóa lên trang 2
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td text="Giai đoạn 3">Giai đoạn 3</td>
                                <td
                                    colspan="2"
                                    text="<div><span class='text-gleads-pink-700 font-bold'>30%</span> còn lại của hợp đồng:</div><ul class='list-disc ml-6 font-bold'><li>30% khi đạt 100% KPI</li><li>20% khi đạt 90% KPI</li><li>10% khi đạt 80% KPI</li></ul>"
                                >
                                    <div>
                                        <span>30%</span>
                                        còn lại của hợp đồng:
                                    </div>
                                    <ul>
                                        <li>30% khi đạt 100% KPI</li>
                                        <li>20% khi đạt 90% KPI</li>
                                        <li>10% khi đạt 80% KPI</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td text="Duy trì thứ hạng từ khóa">
                                    Duy trì thứ hạng từ khóa
                                </td>
                                <td
                                    colspan="2"
                                    text="<div><span class='text-gleads-pink-700 font-bold'>5%</span> x (tổng tiền dự án)/tháng</div>"
                                >
                                    <div>
                                        <span>5%</span>x (tổng tiền dự án)/tháng
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{" "}
                    <span className={styles.logo}>
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            width={72}
                            height={16}
                        />
                    </span>
                </a>
            </footer>
        </div>
    );
}