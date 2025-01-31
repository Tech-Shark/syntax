import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPromotion } from '@/redux/promotionSlice';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import purple_arrow_2 from '@/assets/images/purple_arrow_2.svg';
import arrow from '@/assets/images/arrow1.svg';
import TopIcons from '../../UserDashboard/topIcons';
import hamburger_menu from '@/assets/images/hamburger_menu.svg';
import MobileSidebar from '@/components/Dashboard/mobileSidebar';
import dropdown_arrow from '@/assets/images/drop_down_arrow.svg';

const CreatePromotion: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const [formData, setFormData] = useState({
		promoName: '',
		promoType: '',
		audience: '',
		startDate: '',
		endDate: '',
		limit: '',
		promoCode: '',
		promoDescription: '',
	});
	const [errors, setErrors] = useState({
		promoName: '',
		promoType: '',
		audience: '',
		startDate: '',
		endDate: '',
		limit: '',
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
		setErrors({ ...errors, [id]: '' }); // Clear error when user starts typing
	};

	const validateForm = () => {
		let isValid = true;
		const newErrors = { ...errors };

		if (!formData.promoName.trim()) {
			newErrors.promoName = 'Please fill this field';
			isValid = false;
		}
		if (!formData.promoType) {
			newErrors.promoType = 'Please fill this field';
			isValid = false;
		}
		if (!formData.audience) {
			newErrors.audience = 'Please fill this field';
			isValid = false;
		}
		if (!formData.startDate || !formData.endDate) {
			newErrors.startDate = 'Please fill this field';
			isValid = false;
		}
		if (!formData.limit) {
			newErrors.limit = 'Please fill this field';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			const newPromotion = {
				...formData,
				id: uuidv4(),
				status: 'active' as const,
				redemptions: 0,
			};
			dispatch(addPromotion(newPromotion));
			navigate('/manage-promotion');
		}
	};

	return (
		<>
			<section className='flex font-outfit'>
				<Sidebar />
				<div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto flex-1'>
					<div className='flex justify-between w-full '>
						<div className='flex items-center justify-between md:gap-36'>
							<div
								className='flex items-center gap-5'
								onClick={() => navigate(-1)}>
								<img
									src={purple_arrow_2}
									alt='back'
								/>
								<p className='text-base text-[#3D3F4E] font-semibold leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer'>
									Back
								</p>
							</div>
							<Link
								to='/pricing-management'
								className='hidden md:flex gap-[0.4rem] justify-center items-center h-[2.7rem] md:h-[2.1rem] bg-white text-black rounded-[0.25rem] border-2 border-black px-[0.63rem] py-[0.31rem] w-auto text-center md:text-left text-sm md:text-base'>
								{' '}
								Pricing Management
							</Link>
						</div>
						<div className='flex items-center ml-3 gap-5'>
							<Link
								to='/pricing-management'
								className='flex md:hidden gap-[0.4rem] justify-center items-center h-[2.7rem] md:h-[2.1rem] bg-white text-black rounded-[0.25rem] border-2 border-black px-[0.63rem] py-[0.31rem] w-auto text-center md:text-left text-sm md:text-base'>
								{' '}
								Pricing Management
							</Link>
							<img
								src={hamburger_menu}
								alt='menu'
								onClick={toggleSidebar}
								className='md:hidden'
							/>
							<MobileSidebar
								isOpen={isSidebarOpen}
								onClose={toggleSidebar}
							/>
						</div>
						<div className='hidden'>
							<TopIcons />
						</div>
					</div>

					<div className='flex flex-col md:flex-row justify-between items-center  md:items-baseline mt-[3.13rem] text-center md:text-left gap-4 md:gap-0'>
						<h5 className='text-[2rem] md:text-[2.5rem] font-bold leading-normal text-center md:text-left'>
							Create and Manage <br className='hidden md:block' /> Promotions
						</h5>
						<p className='text-center font-normal text-base md:text-lg leading-normal'>
							Design and launch special offers to boost engagement or attract
							new <br className='hidden md:block' /> users. Track active
							promotions and their performance.
						</p>
						<div className='flex gap-[0.81rem]'>
							<button className='flex items-center justify-center px-[0.95rem] py-[0.5rem] md:px-[1.56rem] md:py-[0.31rem] bg-white border-2 border-black rounded-[0.25rem] text-[0.98rem] leading-[1.7rem] font-semibold'>
								Preview Promo
							</button>
							<button className='flex items-center justify-center px-[1.56rem] py-[0.31rem] bg-white border-2 border-black rounded-[0.25rem] text-[0.98rem] leading-[1.7rem] font-semibold'>
								End Existing Promo
							</button>
						</div>
					</div>

					<div className='flex justify-center mt-[3.13rem] pb-12'>
						<form
							className='flex flex-col gap-10'
							onSubmit={handleSubmit}>
							<div className='flex flex-col gap-2'>
								<label
									htmlFor='promoName'
									className='font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]'>
									Promo Name
								</label>
								<input
									type='text'
									id='promoName'
									placeholder='Black Friday Deal, New Year Offer'
									className='w-[19.4rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] placeholder-shown:text-[#8C8CA1] text-[#000006]'
									value={formData.promoName}
									onChange={handleChange}
								/>
								{errors.promoName && (
									<p className='text-red-500 text-sm'>{errors.promoName}</p>
								)}
							</div>

							<div className='flex flex-col gap-2'>
								<label
									htmlFor='promoType'
									className='font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]'>
									Promo Type
								</label>
								<select
									id='promoType'
									className='bg-[#E1E0F3] h-[2.9rem] w-44 text-[1.1rem] text-[#1C1D24] font-semibold leading-normal px-3'
									style={{
										backgroundImage: `url(${dropdown_arrow})`,
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'calc(100% - 10px) center',
									}}
									value={formData.promoType}
									onChange={handleChange}>
									<option value=''>Select Promo Type</option>
									<option value='percentage'>Credit Bonus</option>
									<option value='fixed'>Ats Increase</option>
								</select>
								{errors.promoType && (
									<p className='text-red-500 text-sm'>{errors.promoType}</p>
								)}
							</div>

							<div className='flex flex-col gap-2'>
								<label
									htmlFor='audience'
									className='font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]'>
									Target Audience
								</label>
								<select
									id='audience'
									className='bg-[#E1E0F3] h-[2.9rem] w-44 text-[1.1rem] text-[#1C1D24] font-semibold leading-normal px-3'
									style={{
										backgroundImage: `url(${dropdown_arrow})`,
										backgroundRepeat: 'no-repeat',
										backgroundPosition: 'calc(100% - 10px) center',
									}}
									value={formData.audience}
									onChange={handleChange}>
									<option value=''>Select Audience</option>
									<option value='all'>All Users</option>
									<option value='premium'>Premium Users</option>
									<option value='standard'>Standard Users</option>
									<option value='basic'>Basic Users</option>
								</select>
								{errors.audience && (
									<p className='text-red-500 text-sm'>{errors.audience}</p>
								)}
							</div>

							<div className='flex flex-col gap-2'>
								<label
									htmlFor='startDate'
									className='font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]'>
									Duration (Start/End Dates)
								</label>
								<input
									type='date'
									id='startDate'
									className='w-[19.4rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] placeholder-shown:text-[#8C8CA1] text-[#000006]'
									value={formData.startDate}
									onChange={handleChange}
								/>
								{errors.startDate && (
									<p className='text-red-500 text-sm'>{errors.startDate}</p>
								)}
								<input
									type='date'
									id='endDate'
									className='w-[19.4rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] placeholder-shown:text-[#8C8CA1] text-[#000006]'
									value={formData.endDate}
									onChange={handleChange}
								/>
								{errors.endDate && (
									<p className='text-red-500 text-sm'>{errors.endDate}</p>
								)}
							</div>

							<div className='flex flex-col gap-2'>
								<label
									htmlFor='limit'
									className='font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]'>
									Limit
								</label>
								<div className='flex items-center gap-2 w-[19.4rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] text-[#000006]'>
									<input
										type='number'
										id='limit'
										placeholder='75'
										className='bg-[#E8E8E8] w-10 flex items-center justify-center focus:outline-none placeholder-shown:text-[##8C8CA1]'
										value={formData.limit}
										onChange={handleChange}
									/>
									<span className='text-[#000006] font-normal leading-[1.2rem] text-base'>
										Users
									</span>
								</div>
								{errors.limit && (
									<p className='text-red-500 text-sm'>{errors.limit}</p>
								)}
							</div>

							<div className='flex flex-col gap-2'>
								<label
									htmlFor='promoCode'
									className='font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]'>
									Promo Code (Optional)
								</label>
								<input
									type='text'
									id='promoCode'
									placeholder='PROMOSYNTAX1'
									className='w-[19.4rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] placeholder-shown:text-[#8C8CA1] text-[#000006]'
									value={formData.promoCode}
									onChange={handleChange}
								/>
							</div>

							<div className='flex flex-col gap-2'>
								<label
									htmlFor='promoDescription'
									className='font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]'>
									Promo Description (Optional)
								</label>
								<textarea
									id='promoDescription'
									placeholder='Enjoy 20% off all Premium plans this weekend!'
									className='w-[19.4rem] h-[5.2rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] placeholder-shown:text-[#8C8CA1] text-[#000006]'
									value={formData.promoDescription}
									onChange={handleChange}></textarea>
							</div>

							<button
								type='submit'
								className='flex self-center items-center justify-center px-4 py-[0.4rem] bg-black text-white rounded-3xl w-[75%] text-base font-semibold leading-[1.7rem] text-center gap-[1.3rem]'>
								Save and Continue
								<img
									src={arrow}
									alt='save and continue'
								/>
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
export default CreatePromotion;
